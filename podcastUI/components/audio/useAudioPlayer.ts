import {useState, useEffect} from 'react';


function useAudioPlayer() {
    const [duration, setDuration] = useState();
    const [currentTime, setCurrentTime] = useState();
    const [playing, setPlaying] = useState(false);
    const [clickedTime, setClickedTime] = useState();



    useEffect(()=> {

        const audio = <HTMLAudioElement>document.getElementById("audio");

        const setAudioMeta = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime)
        }
        const setAudioTime = () => setCurrentTime(audio.currentTime);


        audio.addEventListener("loadeddata", setAudioMeta);
        audio.addEventListener("timeupdate", setAudioTime);


        playing ? audio.play() : audio.pause();

        if(clickedTime && clickedTime !== currentTime) {
            audio.currentTime = clickedTime;
            setClickedTime(null);

        }

        return () => {
            audio.removeEventListener("loadeddata", setAudioMeta);
            audio.removeEventListener("timeupdate", setAudioTime);

        }
    })

    return {
        currentTime, 
        duration,
        playing, 
        setPlaying, 
        setClickedTime
    }

}

export default useAudioPlayer;

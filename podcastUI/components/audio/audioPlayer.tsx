import React, { FunctionComponent, useRef, useState } from 'react';
import { AudioFile } from '../../services/interface'
import { Howl, Howler } from 'howler';
import { Box } from 'bloomer';
import useAudioPlayer from './useAudioPlayer';
import Bar from './audioBar';
import {Play, Pause} from './PlayPause';
import './audio.scss'



const AudioPlayer: FunctionComponent<AudioFile> = ({ url, id, mime }) => {

    // const {currentTime, duration, playing, setPlaying, setClickedTime} = useAudioPlayer();

    return (
        // <div >
        //     <audio controls>
        //         <source src={url} type={mime} id={id} />
        //     </audio>
        // </div>
        <Box>
            <audio id="audio" controls>
                <source src={cardUrlHandler(url)}/>
            </audio>
          {/* <div className="controls"> 
             {playing ? <Pause handlePress={()=> setPlaying(false)} /> : <Play handlePress={()=> setPlaying(true)}/> }
           <Bar duration={duration} currentTime={currentTime} onTimeUpdate={setClickedTime}/>
          </div> */}
        </Box>
    )
}


export default AudioPlayer;



const cardUrlHandler = (url) => {
    return `http://localhost:1337/${url}`
}
import React from 'react';

function Bar(props) {
    const { duration, currentTime, onTimeUpdate } = props;


    const calculateTime = (e) => {
        const clickedPositionOnPage = e.pageX;
        const bar = document.getElementById("progress");
        const barStart = bar.getBoundingClientRect().left + window.scrollX;
        const barWidth = bar.offsetWidth;
        const clickPositionInBar = clickedPositionOnPage - barStart;
        const timePerPixel = duration / barWidth;
        return timePerPixel * clickPositionInBar;
    }

    const handleTimeDrag = (e) => {
        onTimeUpdate(calculateTime(e));

    const updateTimeOnMove = event => {
        onTimeUpdate(calculateTime(event));
      };

      document.addEventListener("mousemove", updateTimeOnMove);

      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", updateTimeOnMove);
      });
    }


    return (
        <div className="bar">
            <span>{currentTime}</span>
            <progress id="progress" className="progress is-primary" value={currentTime} max={duration} onMouseDown={e => handleTimeDrag(e)}>
                {`${currentTime}%`}
                {/* <span>
                
            </span> */}
            </progress>
            <span>{duration}</span>
        </div>
    )
}


export default Bar;
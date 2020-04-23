
//simple display element that renders the name of the audio sample when clicked
import React from 'react';

function Display(props){
    console.log('Display Props = ', props);
    return(
        <p>{props.clipId}</p>
    )
}

export default Display;
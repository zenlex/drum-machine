//container for all other elements
//must have id #drum machine
//must contain display element with id="display" (make a div with id display and put display react component inside)
//9 drum pads in q,w,e,a,s,d,z,x,c order
import React from 'react'
import DrumPad from '../components/drum-pad'
import Display from '../components/display'

function DrumMachine(props) {
    return(
        <div id = 'drum-machine'>
            <header>BAMF Drum Machine</header>
            <div id='padgrid'>
                <DrumPad audio='AudioQ' label ='LabelQ' hotkey='Q'/>
                <DrumPad audio='AudioW' label ='LabelW' hotkey='W'/>
                <DrumPad audio='AudioE' label ='LabelE' hotkey='E'/>
                <DrumPad audio='AudioA' label ='LabelA' hotkey='A'/>
                <DrumPad audio='AudioS' label ='LabelS' hotkey='S'/>
                <DrumPad audio='AudioD' label ='LabelD' hotkey='D'/>
                <DrumPad audio='AudioZ' label ='LabelZ' hotkey='Z'/>
                <DrumPad audio='AudioX' label ='LabelX' hotkey='X'/>
                <DrumPad audio='AudioC' label ='LabelC' hotkey='C'/>
            </div>
            <div id='controlsbox'>
                <div id='display'>
                    <Display />
                </div>    
                Controls Go Here
            </div>
        </div>
    )
}

export default DrumMachine
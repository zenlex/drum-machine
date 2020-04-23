//container for all other elements
//must have id #drum machine
//must contain display element with id="display" (make a div with id display and put display react component inside)
//9 drum pads in q,w,e,a,s,d,z,x,c order
import React from 'react'
import PadBank from './pad-bank'
import Display from './display'
import * as drumBanks from '../drumBanks.js'

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentBank:drumBanks.bankA
        }
        this.updateDisplay = this.updateDisplay.bind(this);
    }

    updateDisplay(label){
        this.setState({display:label})
    }

    render(){
        return(
            <div id = 'drum-machine'>
                <header>BAMF Drum Machine</header>
                <PadBank currPadBank={this.state.currentBank} updateDisplay={this.updateDisplay}/>
                <div id='controlsbox'>
                    <div id='display'>
                        <Display clipId={this.state.display}/>
                    </div>    
                    Controls Go Here
                </div>
            </div>
        )
    }
}

export default DrumMachine
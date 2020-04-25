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
            currentBank:drumBanks.dubStep,
            volVal : 0.5
        }
        this.updateDisplay = this.updateDisplay.bind(this);
        this.volChange = this.volChange.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
    }

    updateDisplay(label){
        this.setState({display:label});
    }

    volChange(e){
        let val = e.target.value
        this.setState({
            volVal: val,
            display: "Volume: " + (Math.floor(val *100))
        });
        setTimeout(() => this.clearDisplay() , 800);
    }

    clearDisplay(){
        this.setState({display: ''})
    }

    render(){
        const clips = [].slice.call(document.getElementsByClassName('clip'));
        clips.forEach(sound => {
        sound.volume = this.state.volVal
        });

        return(
            <div id = 'drum-machine'>
                <header>BAMF Drum Machine</header>
                <PadBank currPadBank={this.state.currentBank} updateDisplay={this.updateDisplay}/>
                <div id='controlsbox'>
                    <div id='display'>
                        <Display clipId={this.state.display}/>
                    </div>    
                    <div id='controls'>
                        <h2>Volume:</h2>
                        <input type='range' id='volume' min = '0' max = '1' step = '.01' value = {this.state.volVal} onChange={this.volChange}/>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default DrumMachine
//container for all other elements
//must have id #drum machine
//must contain display element with id="display" (make a div with id display and put display react component inside)
//9 drum pads in q,w,e,a,s,d,z,x,c order
import React from 'react'
import PadBank from './pad-bank'
import Display from './display'
import * as drumBanks from '../drumBanks.js'
const drumBankIds = Object.keys(drumBanks);
console.log("drumBankIds = ", drumBankIds);
class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currBankIndex:0,
            currentBank:drumBanks[drumBankIds[0]],
            noOfBanks: 3,
            volVal : 0.5
        }
        this.updateDisplay = this.updateDisplay.bind(this);
        this.volChange = this.volChange.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.bankSelect = this.bankSelect.bind(this);
    }

    updateDisplay(label){
        this.setState({display:label});
        setTimeout(() => this.clearDisplay(), 1500);
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

    bankSelect(dir){
        let newInd = this.state.currBankIndex;
        let max = this.state.noOfBanks - 1;

        if(dir === 'next'){
            newInd = newInd < max ? newInd += 1 : 0;
        }
        if(dir === 'prev'){
            newInd = newInd > 0 ? newInd -= 1 : max;
        }

        this.setState(
            {
                currBankIndex: newInd,
                currentBank: drumBanks[drumBankIds[newInd]]
            });
        this.updateDisplay(drumBankIds[newInd])
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
                        <div id='bank-select'>
                            <h2>Select Bank:</h2>
                            <div id='bank-prev' onClick={() => this.bankSelect('prev')} />
                            <div id='bank-next' onClick={() => this.bankSelect('next')} />
                        </div>
                        <div>
                        <h2>Volume:</h2>
                        <input type='range' id='volume' min = '0' max = '1' step = '.01' value = {this.state.volVal} onChange={this.volChange}/>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default DrumMachine
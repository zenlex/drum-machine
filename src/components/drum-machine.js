//container for all other elements
//must have id #drum machine
//must contain display element with id="display" (make a div with id display and put display react component inside)
//9 drum pads in q,w,e,a,s,d,z,x,c order
import React, {Component} from 'react'
import DrumPad from './drum-pad'
import Display from './display'

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
        this.keyPressHandle = this.keyPressHandle.bind(this);
        this.state = {
            hotkey:{
                Q : 'Q',
                W: 'W',
                E: 'E',
                R: 'R'
            }

        }
    }

    clickHandle(){
        this.togglePadStyle();
        console.log('clickHandle Called')
//call playSound method
//update state.displaystring
    }

    keyPressHandle(){
//toggle button style and call playSound method
//update state.displaystring
    }



    render(){
        return(
            <div id = 'drum-machine'>
                <header>BAMF Drum Machine</header>
                <div id='padgrid'>
                    <DrumPad audio='AudioQ' label ='LabelQ' hotkey='Q' clickHandle={this.clickHandle} keyPressHandle={this.keyPressHandle} id='padQ' />
                    <DrumPad audio='AudioW' label ='LabelW' hotkey='W' clickHandle={this.clickHandle} keyPressHandle={this.keyPressHandle}/>
                    <DrumPad audio='AudioE' label ='LabelE' hotkey='E' clickHandle={this.clickHandle} keyPressHandle={this.keyPressHandle}/>
                    <DrumPad audio='AudioA' label ='LabelA' hotkey='A' clickHandle={this.clickHandle} keyPressHandle={this.keyPressHandle}/>
                    <DrumPad audio='AudioS' label ='LabelS' hotkey='S' clickHandle={this.clickHandle} keyPressHandle={this.keyPressHandle}/>
                    <DrumPad audio='AudioD' label ='LabelD' hotkey='D' clickHandle={this.clickHandle} keyPressHandle={this.keyPressHandle}/>
                    <DrumPad audio='AudioZ' label ='LabelZ' hotkey='Z' clickHandle={this.clickHandle} keyPressHandle={this.keyPressHandle}/>
                    <DrumPad audio='AudioX' label ='LabelX' hotkey='X' clickHandle={this.clickHandle} keyPressHandle={this.keyPressHandle}/>
                    <DrumPad audio='AudioC' label ='LabelC' hotkey='C' clickHandle={this.clickHandle} keyPressHandle={this.keyPressHandle}/>
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
}

export default DrumMachine
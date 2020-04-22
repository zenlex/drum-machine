//drum pad element
//must be clickable and also must be assignable to a hotkey
//must be able to assign audio element with id ="{hotkey}"

import React, { Component } from 'react';

class DrumPad extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            padStyle: 'drum-pad pad-inactive'
        }
        this.playSound = this.playSound.bind(this);
        this.togglePadStyle = this.togglePadStyle.bind(this);
        this.clickHandle = this.clickHandle.bind(this);
        this.keyPressHandle = this.keyPressHandle.bind(this);
    }

componentDidMount(){
   //create callback to check if the key was the hotkey for the pad and trigger the audio. Should also change a state property to activate the button css animation
    document.addEventListener('keydown', this.props.keyPressHandle)

}

componentWillUnmount(){
    document.removeEventListener('keydown')
}


playSound(){
    //callback to play sound associated with instance
}

clickHandle(){
    this.togglePadStyle();
//call playSound method
//update state.displaystring
}

keyPressHandle(){
    //toggle button style and call playSound method
    //update state.displaystring
        }

togglePadStyle(){
    if(this.state.padStyle === 'drum-pad pad-inactive'){
        this.setState({padStyle: 'drum-pad pad-active'})
    } else {
        this.setState({padStyle: 'drum-pad pad-inactive'})
    }
}

    render(){
        return(
            <div className = {this.state.padStyle} id={this.props.id}
                onClick = {this.clickHandle}>
                <audio className = 'clip' id={this.props.key} src={this.props.audioSrc} onEnded={this.togglePadStyle}> </audio>
                <div className='pad-label'>
                    {this.props.key}
                </div>
            </div>
        )
    }
}

export default DrumPad;
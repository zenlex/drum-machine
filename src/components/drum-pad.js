//drum pad element
//must be clickable and also must be assignable to a hotkey
//must be able to assign audio element with id ="{hotkey}"

import React from 'react';

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
    document.addEventListener('keydown', this.keyPressHandle);
}

componentWillUnmount(){
    document.removeEventListener('keydown', this.keyPressHandle);
}


playSound(){
    this.togglePadStyle();
    const clip = document.getElementById(this.props.hotkey);
    clip.currentTime=0;
    var playPromise = clip.play();

      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            // Automatic playback started!
            // Show playing UI.
            console.log("audio played auto");
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            console.log("playback prevented");
          });
      }
    this.props.updateDisplay(this.props.clipId);
    setTimeout(()=>this.togglePadStyle(), 150);
}

clickHandle(){
    this.playSound();
}

keyPressHandle(e){
 
    if(e.key === this.props.hotkey || e.keyCode === this.props.keyCode){
        this.playSound();
    }
   
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
            <div className = {this.state.padStyle} id={this.props.clipId}
                onClick = {this.clickHandle}>
                <audio className = 'clip' id={this.props.hotkey} src={this.props.audioSrc}> </audio>
                    {this.props.hotkey}
            </div>
        )
    }
}

export default DrumPad;
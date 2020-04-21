//drum pad element
//must be clickable and also must be assignable to a hotkey
//must be able to assign audio element with id ="{hotkey}"

import React, { Component } from 'react';

class DrumPad extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            audio:'default-audio',
            hotkey: 'default-hotkey',
            label: 'default-label'
        }
    }

    render(){
        return(
            <div className = 'drum-pad'>
                I'm a drumPad<br />
                My hotkey = {this.props.hotkey}<br />
                My audio clip = {this.props.audio}<br />
                My label = {this.props.label}
            </div>
        )
    }
}

export default DrumPad;
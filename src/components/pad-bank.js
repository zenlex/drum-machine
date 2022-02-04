import React from 'react'
import DrumPad from './drum-pad'

class PadBank extends React.Component {

  render() {
    let padBank = this.props.currPadBank.map((padObj, i, currBank) => {
      return (
        <DrumPad
          key={i}
          audioSrc={currBank[i].audioSrc}
          clipId={currBank[i].id}
          hotkey={currBank[i].hotkey}
          keyCode={currBank[i].keyCode}
          updateDisplay={this.props.updateDisplay}
        />
      )
    })

    return (
      <div id='padgrid'>
        {padBank}
      </div>
    )
  }

}

export default PadBank;
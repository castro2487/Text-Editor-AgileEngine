import React, { Component } from 'react';
import CircularColor from 'react-circular-color';

class ColorPicker extends Component {
  handleColorChange = (color) => {
    const { activeWord } = this.props;
    this.props.changeColor(color, activeWord);
  }

  reset = () => {
    const { activeWord } = this.props;
    this.props.changeColor('#333', activeWord);
  }

  render() {
    return (
      <div className="color-picker">
        <CircularColor size={220} onChange={this.handleColorChange} />
        <button className="reset" onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default ColorPicker;
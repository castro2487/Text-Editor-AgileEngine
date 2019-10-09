import React, { Component } from 'react'
import '../../styles/Word.css';

class Word extends Component {
  render() {
    const {word, bold, underlined, itallic, index, active } = this.props;
    const boldC = bold ? 'bold' : '';
    const underC = underlined ? 'underlined' : '';
    const itallC = itallic ? 'itallic' : '';
    const activeC = active ? 'active' : '';

    return (
      <span style={{color: this.props.color}} id={index} onClick={e => this.props.setActiveWord()} className={`word ${boldC} ${underC} ${itallC} ${activeC}`}>
        {word}
      </span>
    )
  }
}

export default Word;
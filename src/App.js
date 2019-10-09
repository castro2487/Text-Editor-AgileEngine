import React, {Component} from 'react';
import './styles/App.css';
import ControlPanel from './components/control-panel/ControlPanel';
import FileZone from './components/file-zone/FileZone';
import Word from './components/word/word';
import getMockText from './tests/text.service';

class App extends Component {
  state = {
    words: [],
    activeWord: '',
  }

  componentDidMount() {
    this.getText();
  }

  makeBold = (wordId) => {
    if (!(wordId > 0)) return false;
    const { words } = this.state;
    const wordToFormat = { ...words[wordId], bold: !words[wordId].bold }
    words[wordId] = wordToFormat;
    this.setState({ words: words });
  }

  makeUnderlined = (wordId) => {
    if (!(wordId > 0)) return false;
    const { words } = this.state;
    const wordToFormat = { ...words[wordId], underlined: !words[wordId].underlined }
    words[wordId] = wordToFormat;
    this.setState({ words: words });
  }

  makeItalic = (wordId) => {
    if (!(wordId > 0)) return false;
    const { words } = this.state;
    const wordToFormat = { ...words[wordId], itallic: !words[wordId].itallic }
    words[wordId] = wordToFormat;
    this.setState({ words: words });
  }

  changeColor = (color, wordId) => {
    if (!(wordId > 0)) return false;
    const { words } = this.state;
    const wordToFormat = { ...words[wordId], color: color }
    words[wordId] = wordToFormat;
    this.setState({ words: words });
  }

  addWord = (word) => {
    this.setState((state, props) => {
      return { words: [...state.words, { word: word, bold: false, itallic: false, underlined: false, color: '#333' }] }
    })
  }

  replace = (word, wordId) => {
    if (word && wordId) {
      const { words } = this.state;
      const wordToChange = { ...words[wordId], word: word }
      words[wordId] = wordToChange
      this.setState({ words: words });
    }
  }

  getText() {
    getMockText().then((result) => {
      const wordsArray = result.split(' ');

      const words = wordsArray.map(word => ({word: word, bold: false, underlined: false, itallic: false, color: '#333'}));
      this.setState({ words: words });
    });
  }

  setActiveWord = (wordId) => {
    this.setState({ activeWord: wordId })
  }

  render() {
    const text = this.state.words.map((word, index) => <Word key={index} active={this.state.activeWord === index} index={index} {...word} setActiveWord={() => this.setActiveWord(index)}/>);

    return (
      <div className="App">
        <header>
          <span>Text Editor</span>
        </header>
        <main>
          <ControlPanel replace={this.replace} activeWord={this.state.activeWord} activeWordText={this.state.activeWord ? this.state.words[this.state.activeWord].word : null} makeBold={this.makeBold} makeItalic={this.makeItalic} makeUnderlined={this.makeUnderlined} word={this.state.words[this.state.activeWord]} changeColor={this.changeColor}/>
          <FileZone text={text} addWord={this.addWord} />
        </main>
      </div>
    );
  }
}
  
export default App;
  
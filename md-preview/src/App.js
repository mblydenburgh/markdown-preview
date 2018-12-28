/* eslint 8009:0 */
import React, { Component } from 'react';
import Styled from 'styled-components';
import Editor from './Editor';
import Previewer from './Previewer';
import './App.css';

class App extends Component {
  state = {
    value: '',
  }

  render() {
    const handleInput = (event) => {
      console.log(event.target.value);
      this.setState({ value: event.target.value });
    };
    return (
      <PreviewBody>
        <Header>Markdown Preview</Header>
        <Editor onChange={handleInput} />
        <Previewer markdown={this.state.value} />
      </PreviewBody>
    );
  }
}

export default App;

const PreviewBody = Styled.div`
  display: grid;
  grid-template-columns: repeat(2,minmax(auto,1fr));
  background-color: #273956;
`;

const Header = Styled.h1`
  color: white;
  grid-column: 1/-1;
`;

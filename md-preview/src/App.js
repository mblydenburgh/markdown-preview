import React, { Component } from 'react';
import Styled from 'styled-components';
import Editor from './Editor';
import Previewer from './Previewer';
import './App.css';

class App extends Component {
  render() {
    return (
      <PreviewBody>
        <Editor />
        <Previewer />
      </PreviewBody>
    );
  }
}

export default App;

const PreviewBody = Styled.div`
  display: grid;
  grid-template-columns: repeat(2,minmax(400px,1fr));
  background-color: #273956;
`;
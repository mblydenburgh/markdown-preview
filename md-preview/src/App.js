import React, { Component } from 'react';
import Styled from 'styled-components';
import Editor from './Editor';
import Previewer from './Previewer';

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
  
`;
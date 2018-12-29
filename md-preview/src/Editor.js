import React from 'react';
import Styled from 'styled-components';

const Editor = props => (
  <EditorBody>
    <h3>Editor</h3>
    <textarea onChange={props.onChange} id="editor" cols="75" rows="35">
      {props.value}
    </textarea>
  </EditorBody>
);

export default Editor;

const EditorBody = Styled.div`
    text-align: center;
`;

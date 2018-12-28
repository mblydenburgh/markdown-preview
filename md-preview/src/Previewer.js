import React from 'react';
import Styled from 'styled-components';
import { Markdown } from 'react-showdown';

const markdown = '# Hello\n\nMore content...';

const Previewer = props => (
  <PreviewerBody>
    <h3>Preview</h3>
    <PreviewDiv id="preview">
        <Markdown markup={ props.markdown } />
    </PreviewDiv>
  </PreviewerBody>
);

export default Previewer;

const PreviewerBody = Styled.div`
    text-align: center;
`;

const PreviewDiv = Styled.div`
    background: white;
    margin: 1rem;
`;
// <PreviewDiv>{(props.result)?(props.result):('Markdown will preview here')}</PreviewDiv>
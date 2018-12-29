import React from 'react';
import Styled from 'styled-components';
// import { Markdown } from 'react-showdown';
// import showdown from 'showdown';
import marked from 'marked';

marked.setOptions({ breaks: true });

const Previewer = props => (
  <PreviewerBody>
    <h3>Preview</h3>
    <PreviewDiv id="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown) }} />
  </PreviewerBody>
);

export default Previewer;

const PreviewerBody = Styled.div`
    text-align: center;
`;

const PreviewDiv = Styled.div`
    background: white;
    margin: 1rem;
    text-align: left;
`;

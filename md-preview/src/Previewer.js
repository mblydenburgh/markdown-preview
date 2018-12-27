import React from 'react';
import Styled from 'styled-components';

const Previewer = (props) => {
    return (
    <PreviewerBody>
        <h3>Preview</h3>
        <div>{props.input}</div>
    </PreviewerBody>
    );
};

export default Previewer;

const PreviewerBody = Styled.div`
    border: 1px dashed blue;
    text-align: center;
`;
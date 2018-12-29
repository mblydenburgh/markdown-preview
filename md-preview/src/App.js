/* eslint 8009:0 */
import React, { Component } from 'react';
import Styled from 'styled-components';
import Editor from './Editor';
import Previewer from './Previewer';
import './App.css';

class App extends Component {
  state = {
    value:
    `# Welcome to **Markdown Preview**
# Another h1
## To start previewing, type in valid markdown here.
[Links](https://www.google.com) can be inserted

\`<p>Sample inline code</p>\`

\`\`\` 
Lots of code
can go in a block
\`\`\`

### To do list 
1. Learn Markdown
2. Make list
3. ????
4. Profit

> "Markdown is great"

![A nice Doggo](http://dailypicdump.com/media/20161028/doggo-fruit-lol-lmao-dank.jpg)
`, /* eslint quotes:0 */
  }

  render() {
    const handleInput = (event) => {
      console.log(event.target.value);
      this.setState({ value: event.target.value });
    };
    return (
      <PreviewBody>
        <Header>Markdown Preview</Header>
        <Editor value={this.state.value} onChange={handleInput} />
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

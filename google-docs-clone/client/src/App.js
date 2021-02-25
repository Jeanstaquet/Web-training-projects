import React, {useState} from 'react';
import "./App.css";
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import Banner from "./components/Banner/Banner";
import Toolbox from "./components/Toolbox/Toolbox";
import Board from "./containers/Board/Board";
const App = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.create(),
  );

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  const _onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  }

  const contentState = editorState.getCurrentContent();


  const onChange = (editorState) => {
    setEditorState(editorState)
  }

  setEditorState()
  console.log(contentState.getPlainText())
  

  return (
    <div className="App">
      <Banner/>
      <Toolbox/>
      <Board/>
      <Board/>
      <div className="editor__container" style={{position: "absolute", top:"13vh"}}>
      <button onClick={_onBoldClick}>Bold</button>
      <Editor editorState={editorState} 
              onChange={onChange}
              handleKeyCommand={handleKeyCommand}/>

    </div>
      </div>

  );
};

export default App;
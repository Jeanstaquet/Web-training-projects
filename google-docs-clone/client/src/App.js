import React, {useState} from 'react';
import "./App.css";
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import Banner from "./components/Banner/Banner";
import Toolbox from "./components/Toolbox/Toolbox";
const App = () => {
  // const [editorState, setEditorState] = useState(
  //   () => EditorState.createEmpty(),
  // );

  // const handleKeyCommand = (command, editorState) => {
  //   const newState = RichUtils.handleKeyCommand(editorState, command);
  //   if (newState) {
  //     onChange(newState);
  //     return 'handled';
  //   }
  //   return 'not-handled';
  // }

  // const _onBoldClick = () => {
  //   onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  // }

  // const onChange = (editorState) => {
  //   setEditorState(editorState)
  // }

  return (
    <div>
      <Banner/>
      <Toolbox/>
       {/* <button onClick={_onBoldClick}>Bold</button>
      <Editor editorState={editorState} 
              onChange={onChange}
              handleKeyCommand={handleKeyCommand}/> */}
    </div>
  );
};

export default App;
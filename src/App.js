
import './App.css';

// npm install react-ace ace-builds highlight.js
import { ScriptManipulationButtons } from './components/ScriptManipulationButtons';
import {NewScriptDialogBox} from './components/NewScriptDialogBox';
import { NewScriptDialogBoxProvider } from './context/NewScriptDialogBoxContext';
import {Editor} from './components/Editor'

import { EditorProvider } from './context/EditorContext';

function App() {


  return (
    <div>
      <EditorProvider>
        
        <Editor/>
        
        <NewScriptDialogBoxProvider>
          <ScriptManipulationButtons/>
          <NewScriptDialogBox title={"Add new script"} dialog_text={"Enter name of script"}/>
        </NewScriptDialogBoxProvider>

      </EditorProvider>   
       
    </div>
    
  );
}

export default App;

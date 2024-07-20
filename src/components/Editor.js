
import AceEditor from 'react-ace';
// Note! keep the following two lines below AceEditor import statement
import 'ace-builds/src-noconflict/mode-python'; // Import Python mode
import 'ace-builds/src-noconflict/theme-github';
import { EditorContext } from '../context/EditorContext';
import { useRef, useContext } from 'react';
import { ScriptMenu } from './ScriptMenu';
import '../styles/EditorStyles.css'

const displayScriptName = (scriptName) => {
  return scriptName === "" ? "<Script name>": scriptName;
}

export const Editor = () => {

    const { setContent, scriptName} = useContext(EditorContext);
    const editorRef = useRef(null);

  

    return (
        <div>

            <div style={{"margin-bottom": "10px", "margin-left": "10px"}} class={'dialog-action-container-hz'}>
              <label class={scriptName === "" ? "ScriptNameLabelDisabled":"ScriptNameLabel"}>
                {displayScriptName(scriptName)}
              </label>

              <div style={{"margin-left": "auto"}}>
                <ScriptMenu />
              </div>
              
            </div>
            

            <div class="editor-container">
                <AceEditor
                    onChange={setContent}
                    ref={editorRef} // Assign ref to access AceEditor instance
                    mode="python"   // Specify the language mode as python
                    theme="github"  // Choose your preferred Ace theme
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    width="100%"
                    height="500px"
                    // value="xyz"
                    setOptions={{ useWorker: false }}/>
            </div>

        </div>
    );
}

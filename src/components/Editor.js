
import AceEditor from 'react-ace';
// Note! keep the following two lines below AceEditor import statement
import 'ace-builds/src-noconflict/mode-python'; // Import Python mode
import 'ace-builds/src-noconflict/theme-github';
import { EditorContext } from '../context/EditorContext';
import { useRef, useContext } from 'react';
import { ScriptMenu } from './ScriptMenu';
import '../styles/EditorStyles.css'
import NetworkError from './NetworkError';

const displayScriptName = (scriptName) => {
  return scriptName === "" ? "<Script name>": scriptName;
}

export const Editor = () => {

    const { editorContents, setEditorContent, scriptName, scriptMenuState} = useContext(EditorContext);
    const editorRef = useRef(null);

  

    return (
        <div>

            <div style={{"marginBottom": "10px", "marginLeft": "10px"}} className={'dialog-action-container-hz'}>
              <label className={scriptName === "" ? "ScriptNameLabelDisabled":"ScriptNameLabel"}>
                {displayScriptName(scriptName)}
              </label>

              <div style={{"marginLeft": "auto"}}>
                <ScriptMenu />
              </div>
            </div>
            

            <div className="editor-container">
                <AceEditor
                    className={"AceEditorStyles"}
                    onChange={setEditorContent}
                    ref={editorRef} // Assign ref to access AceEditor instance
                    mode="python"   // Specify the language mode as python
                    theme="github"  // Choose your preferred Ace theme
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    width="100%"
                    height="50vh" // height is 60% of ViewPort
                    value={editorContents}
                    setOptions={{ useWorker: false }}
                    />
            </div>
            
            {scriptMenuState.networkError && <NetworkError />
}
        </div>
    );
}

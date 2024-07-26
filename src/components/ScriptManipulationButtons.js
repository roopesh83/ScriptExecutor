import { EditorContext } from "../context/EditorContext";
import { NewScriptDialogBoxContext } from "../context/NewScriptDialogBoxContext";
import { useContext } from "react";
import Button from '@mui/material/Button';
import { execScript } from "../api/ScriptResource";


export const ScriptManipulationButtons = () => {
    const { open, setOpen} = useContext(NewScriptDialogBoxContext)
    const { editorContents, setScriptMenuState, scriptMenuState } = useContext(EditorContext)

    function handleSave(){
        setOpen(!open)
    }

    function handleExecuteScript(scriptName, content){
        execScript(scriptName, content).catch(() => {
            setScriptMenuState((prevState) => ({
                ...prevState,
                networkError: true      // network error
            }))
        })
    }

    return (
        <div className="button-container">
            <Button onClick={handleSave}>Save script as</Button>
            <Button disabled={scriptMenuState.currentlySelectedMenuItem === ''} >Delete script</Button>
            <Button disabled={scriptMenuState.currentlySelectedMenuItem === ''} >Update script</Button>
            <Button onClick={() => {handleExecuteScript(scriptMenuState.currentlySelectedMenuItem, editorContents)}} disabled={scriptMenuState.currentlySelectedMenuItem === ''} >Execute script</Button>
        </div>
    );
}
import { EditorContext } from "../context/EditorContext";
import { NewScriptDialogBoxContext } from "../context/NewScriptDialogBoxContext";
import { useContext } from "react";
import Button from '@mui/material/Button';

export const ScriptManipulationButtons = () => {
    const { open, setOpen} = useContext(NewScriptDialogBoxContext)
    const { scriptMenuState } = useContext(EditorContext)

    

    return (
        <div class="button-container">
            <Button onClick={() => {setOpen(!open)}}>Save script as</Button>
            <Button disabled={scriptMenuState.currentlySelectedMenuItem === ''} >Delete script</Button>
            <Button disabled={scriptMenuState.currentlySelectedMenuItem === ''} >Update script</Button>
        </div>
    );
}
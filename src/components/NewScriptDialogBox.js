import { useContext, useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import { NewScriptDialogBoxContext } from "../context/NewScriptDialogBoxContext";
import '../styles/dialogActions.css'
import { EditorContext } from "../context/EditorContext";
import TextField from '@mui/material/TextField';

import {Warning} from '../components/Warning'
import {addNewScript} from '../api/ScriptResource'

export const NewScriptDialogBox = ({title, dialog_text}) => {
    const {open, setOpen} = useContext(NewScriptDialogBoxContext)
    const { editorContents,/* setEditorContent, _,*/ setScriptName, scriptMenuState, setScriptMenuState} = useContext(EditorContext);
    
    const [ scriptNameInputValue, setScriptNameInputValue ] = useState("")

    const handleSave = () => {
        addNewScript(scriptNameInputValue, editorContents, '').then( (response) => {
            setScriptName(scriptNameInputValue)
            setOpen(!open) 
            setScriptMenuState((prevState) => ({
                ...prevState,
                mapOfSavedScripts: {
                    ...prevState.mapOfSavedScripts,
                    [scriptNameInputValue]: {        // adding the newly added script to mapOfSavedScripts
                       name: scriptNameInputValue,
                       content: editorContents
                    }
                },
                networkError: false     // no network error
            }))
        }).catch(() => {
            setScriptMenuState((prevState) => ({
                ...prevState,
                networkError: true      // network error
            }))
        })
        
    }
   

    return (
        <Dialog open={open} onClose={setOpen}>
            <DialogTitle>{title}</DialogTitle>
                {/* <DialogContent>
                    <p>{dialog_text}</p>
                </DialogContent> */}
            <DialogActions>
            <div className={'dialog-action-container-v'}>
                <TextField
                    id="myInput"
                    label="Enter name of script here"
                    // value={setScriptName}
                    onChange={(event)=>{setScriptNameInputValue(event.target.value)}}
                    variant="outlined"
                    fullWidth
                    margin="normal"/>
                
                <div className={'dialog-action-container-hz'}>
                    <Button disabled={scriptNameInputValue === ''} onClick={handleSave} color="primary">
                        Save
                    </Button>
                    <Button onClick={()=>setOpen(!open)} color="primary">
                        Cancel
                    </Button>
                    
                </div>

                { (scriptNameInputValue === '') && <Warning warningText="Script name cannot be empty"/> }
            </div>
            </DialogActions>
        </Dialog>
    );
}
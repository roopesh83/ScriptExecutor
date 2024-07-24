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

import Typography from '@mui/material/Typography';
import WarningIcon from '@mui/icons-material/Warning';

import {addNewScript} from '../api/ScriptResource'

export const NewScriptDialogBox = ({title, dialog_text}) => {
    const {open, setOpen} = useContext(NewScriptDialogBoxContext)
    const { editorContents,/* setEditorContent, _,*/ setScriptName} = useContext(EditorContext);
    
    const [ scriptNameInputValue, setScriptNameInputValue ] = useState("")

    const handleSave = () => {
        addNewScript(scriptNameInputValue, editorContents, '').then( (response) => {
            console.log('add new script')
            console.warn(response.data)
            setScriptName(scriptNameInputValue)
            setOpen(!open) 
        }).catch(() => {
            console.warn("Failed to add script")
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

                { (scriptNameInputValue === '') && <Typography variant="body1" color="error" style={{ display: 'flex', alignItems: 'center' }}>
                        <WarningIcon style={{ marginRight: '0.5em' }} />
                        Script name cannot be empty
                </Typography> }
            </div>
            </DialogActions>
        </Dialog>
    );
}
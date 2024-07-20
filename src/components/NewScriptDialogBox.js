import { useContext } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import { NewScriptDialogBoxContext } from "../context/NewScriptDialogBoxContext";
import '../styles/dialogActions.css'
import { EditorContext } from "../context/EditorContext";
import TextField from '@mui/material/TextField';

export const NewScriptDialogBox = ({title, dialog_text}) => {
    const {open, setOpen} = useContext(NewScriptDialogBoxContext)
    const { /*editorContents, setContent, _,*/ setScriptName} = useContext(EditorContext);
    var scriptName = ""
    const handleSave = () => {
        setScriptName(scriptName)
        setOpen(!open)
    }
   

    return (
        <Dialog open={open} onClose={setOpen}>
            <DialogTitle>{title}</DialogTitle>
                {/* <DialogContent>
                    <p>{dialog_text}</p>
                </DialogContent> */}
            <DialogActions>
            <div class={'dialog-action-container-v'}>
                <TextField
                    id="myInput"
                    label="Enter name of script here"
                    // value={setScriptName}
                    onChange={(event)=>{scriptName=event.target.value}}
                    variant="outlined"
                    fullWidth
                    margin="normal"/>
                
                <div class={'dialog-action-container-hz'}>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                    <Button onClick={()=>setOpen(!open)} color="primary">
                        Cancel
                    </Button>
                </div>
            </div>
            </DialogActions>
        </Dialog>
    );
}
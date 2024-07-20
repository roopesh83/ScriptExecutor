
import { InputLabel, Select, MenuItem } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import '../styles/dialogActions.css'
import { EditorContext } from '../context/EditorContext';

export const ScriptMenu = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const { scriptName, setScriptName} = useContext(EditorContext);
    const { scriptMenuState, setScriptMenuState} = useContext(EditorContext)

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        setScriptName(event.target.value);  // set the script name based on the dropdown menu item selected
        setScriptMenuState(prevState => ({  // set the scriptMenuState
            ...prevState,
            currentlySelectedMenuItem: event.target.value
        }))
    };

    useEffect(() => {
        if(scriptName !== selectedOption){  // due to a side effect, scriptName and selectedOption are out of sync
            setSelectedOption("")
            setScriptMenuState(prevState => ({
                ...prevState,
                currentlySelectedMenuItem: ""
            }))
        }
      }, [scriptName]);

    return (
        <div>
            <InputLabel style={{"margin-left": "auto", "margin-right": "10px"}}>Select a script</InputLabel>
              
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedOption}
                // label="Select a script"
                style={{"margin-right": "10px"}}
                onChange={handleChange}>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
              </Select>
        </div>
    );
}
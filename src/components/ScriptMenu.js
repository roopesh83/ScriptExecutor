
import { InputLabel, Select, MenuItem } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import '../styles/dialogActions.css'
import { EditorContext } from '../context/EditorContext';

export const ScriptMenu = () => {
    console.log('ScriptMenu component is called')
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

    // calling useEffect once by setting dependency array to empty array
    useEffect(() => {
        console.log("called useEffect in ScriptMenu.js")
        setScriptMenuState((prevState) => (
            {
                ...prevState,
                ...{
                    listOfSavedScripts: [
                        {
                            "name": "script99.py",
                            "content": "print"
                        }
                    ]
                }
            }
        ))
    }, [])

    return (
        <div>
            <InputLabel style={{"marginLeft": "auto", "marginRight": "10px"}}>Select a script</InputLabel>
              
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedOption}
                // label="Select a script"
                style={{"marginRight": "10px"}}
                onChange={handleChange}>
                    <MenuItem value="">None</MenuItem>
                    {
                        // iteratively render MenuItem components
                        scriptMenuState.listOfSavedScripts.map(script => (
                            <MenuItem key={script.name} value={script.name}>{script.name}</MenuItem>
                        ))
                    }
              </Select>
        </div>
    );
}
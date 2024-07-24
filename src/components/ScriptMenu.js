
import { InputLabel, Select, MenuItem } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import '../styles/dialogActions.css'
import { EditorContext } from '../context/EditorContext';
import axios from 'axios'
import {fetchAllScripts} from '../api/ScriptResource'

export const ScriptMenu = () => {
    console.log('ScriptMenu component is called')
    const [selectedOption, setSelectedOption] = useState('');
    const { scriptName, setScriptName, setEditorContent} = useContext(EditorContext);
    const { scriptMenuState, setScriptMenuState} = useContext(EditorContext)

    const handleChange = (event) => {
        const menuOption = event.target.value
        setSelectedOption(menuOption);
        setScriptName(menuOption);  // set the script name based on the dropdown menu item selected
        setScriptMenuState(prevState => ({  // set the scriptMenuState
            ...prevState,
            currentlySelectedMenuItem: menuOption
        }))
        
        const currentScript = menuOption
        if (currentScript === "")
            setEditorContent("")
        else
            setEditorContent(scriptMenuState.mapOfSavedScripts[currentScript]?.content)
    };

    useEffect(() => {
        console.log("1st useEffect called")
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

        fetchAllScripts().then(
            (response) => {
                setScriptMenuState((prevState) => ({
                    ...prevState,
                    mapOfSavedScripts: response.data
              }))
            }
        )
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
                        (Object.entries(scriptMenuState.mapOfSavedScripts)).sort().map(([scriptName, v]) => (
                             <MenuItem key={scriptName} value={scriptName}>{scriptName}</MenuItem>
                        ))
                    }
              </Select>
        </div>
    );
}
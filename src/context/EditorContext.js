import { createContext, useState } from "react";

// create context object
export const EditorContext = createContext();

// create provider component
export const EditorProvider = ({ children }) => {
    const [editorContents, setContent] = useState("");
    const [scriptName, setScriptName] = useState("");
    const [scriptMenuState, setScriptMenuState] = useState({
        currentlySelectedMenuItem: "",
        listOfSavedScripts: [
            {
                "name": "script1.py",
                "content": "hello"
            },
            {
                "name": "script2.py",
                "content": "print"
            }
        ]
    });

    return (
        <EditorContext.Provider value={{editorContents, setContent, scriptName, setScriptName, scriptMenuState, setScriptMenuState}}>
            {children}
        </EditorContext.Provider>
    )
}

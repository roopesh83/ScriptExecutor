import { createContext, useState } from "react";

// create context object
export const EditorContext = createContext();

// create provider component
export const EditorProvider = ({ children }) => {
    const [editorContents, setEditorContent] = useState("");
    const [scriptName, setScriptName] = useState("");
    const [scriptMenuState, setScriptMenuState] = useState({
        currentlySelectedMenuItem: "",
        mapOfSavedScripts: {
            /** @type { name: string, content: string } */
        },
        networkError: false
    });

    return (
        <EditorContext.Provider value={{editorContents, setEditorContent, scriptName, setScriptName, scriptMenuState, setScriptMenuState}}>
            {children}
        </EditorContext.Provider>
    )
}

import { createContext, useState } from "react";

export const NewScriptDialogBoxContext = createContext();

export const NewScriptDialogBoxProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    
    return (
        <NewScriptDialogBoxContext.Provider value={{open, setOpen}}>
            {children}
        </NewScriptDialogBoxContext.Provider>
    );
}
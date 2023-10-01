import React, { useState, createContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const value = {
        isMobileOpen,
        setIsMobileOpen,
    };

    return (
        <Context.Provider value={value}> {children} </Context.Provider>
    );
};

export default Context;
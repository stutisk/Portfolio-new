import { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const NavContext = createContext();
export const useTab = () => useContext(NavContext);

export const NavProvider = ({children}) => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.state?.tab ?? "About Me");

    useEffect(() => {
        if (location.state?.tab) {
            setActiveTab(location.state.tab);
        }
    }, [location.state]);

    return (
        <NavContext.Provider value={{activeTab, setActiveTab}}>
            {children}
        </NavContext.Provider>
    )
}

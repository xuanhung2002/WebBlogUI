import { createContext, useContext, useState } from "react";

const initialAppContext = {
    // isAuthenticated: Boolean(getAccessTokenFromCookies()),
    isAuthenticated: null,
    setIsAuthenticated: () => null,
    // profile: getProfileFromCookies(),
    profile: null,
    setProfile: () => null,
    reset: () => null,
  };
  
  const AppContext = createContext(initialAppContext);
  
  export const AppProvider = ({ children, defaultValue = initialAppContext }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
      defaultValue.isAuthenticated
    );
    const [profile, setProfile] = useState(defaultValue.profile);
  
    const reset = () => {
      setIsAuthenticated(false);
      setProfile(null);
    };
  
    return (
      <AppContext.Provider
        value={{
          isAuthenticated,
          setIsAuthenticated,
          profile,
          setProfile,
          reset,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };
  
  export const AppConsumer = AppContext.Consumer;
  
  export const useAppContext = () => useContext(AppContext);
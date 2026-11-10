"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

const AppContext = createContext({
  isVideoLoaded: false,
  setVideoLoaded: () => {},
});

export function AppProvider({ children }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const setVideoLoaded = useCallback((loaded = true) => {
    setIsVideoLoaded(loaded);
  }, []);

  return (
    <AppContext.Provider value={{ isVideoLoaded, setVideoLoaded }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

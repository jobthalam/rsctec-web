"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

const AppContext = createContext({
  isVideoLoaded: false,
  setVideoLoaded: () => {},
  enquiryModal: { isOpen: false, subject: "" },
  openEnquiryModal: () => {},
  closeEnquiryModal: () => {},
  trainingModal: { isOpen: false, courseTitle: "" },
  openTrainingModal: () => {},
  closeTrainingModal: () => {},
});

export function AppProvider({ children }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    subject: "",
  });
  const [trainingModal, setTrainingModal] = useState({
    isOpen: false,
    courseTitle: "",
  });

  const setVideoLoaded = useCallback((loaded = true) => {
    setIsVideoLoaded(loaded);
  }, []);

  const openEnquiryModal = useCallback((subject = "") => {
    setEnquiryModal({
      isOpen: true,
      subject: typeof subject === "string" ? subject : "",
    });
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setEnquiryModal({ isOpen: false, subject: "" });
  }, []);

  const openTrainingModal = useCallback((courseTitle = "") => {
    setTrainingModal({
      isOpen: true,
      courseTitle: typeof courseTitle === "string" ? courseTitle : "",
    });
  }, []);

  const closeTrainingModal = useCallback(() => {
    setTrainingModal({ isOpen: false, courseTitle: "" });
  }, []);

  return (
    <AppContext.Provider
      value={{
        isVideoLoaded,
        setVideoLoaded,
        enquiryModal,
        openEnquiryModal,
        closeEnquiryModal,
        trainingModal,
        openTrainingModal,
        closeTrainingModal,
      }}
    >
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

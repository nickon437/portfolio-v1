import React, { useState } from 'react';

export const UiContext = React.createContext();

export const UiProvider = (props) => {
  const [ui, setUi] = useState({
    ctxIsAboutActive: false,
    ctxIsContactActive: false,
  });

  return (
    <UiContext.Provider value={[ui, setUi]}>
      {props.children}
    </UiContext.Provider>
  );
};

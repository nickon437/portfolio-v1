import React, { useState } from 'react';

export const UiContext = React.createContext();

export const UiProvider = (props) => {
  const [ui, setUi] = useState({
    ctxInfoPane: '',
    ctxProjectDetails: {
      imgSrc: '', 
      title: '', 
      snippet: '',
      description: '',
      keyFeatures: [],
      demo: [],
      techStack: [],
      site: '',
      source: '',
    },
  });

  return (
    <UiContext.Provider value={[ui, setUi]}>
      {props.children}
    </UiContext.Provider>
  );
};

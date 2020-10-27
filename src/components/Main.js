import React, { useContext } from 'react'
import InfoPane from './InfoPane';
import Intro from './Intro';
import Project from './Project';
import { UiContext } from '../context/UiContext'

const Main = () => {
    const [ui, setUi] = useContext(UiContext);
    return (
        
      <div className={`App ${ui.ctxInfoPane === '' ? '' : 'no-scroll'}`}>
    {/* //   <div className="App"> */}
        <Intro />
        <InfoPane />
        <Project />
       </div>
    )
}

export default Main

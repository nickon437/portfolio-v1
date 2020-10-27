import React, { useContext, useRef } from 'react'
import { UiContext } from '../context/UiContext'
import About from './About';
import Contact from './Contact';

const InfoPane = () => {
    const [ui, setUi] = useContext(UiContext);
    const content = useRef(null);

    const handleBack = () => {
        setUi((prevUi) => ({
            ...prevUi,
            ctxInfoPane: '',
        }));
    }

    if (ui.ctxInfoPane === 'about') {
        content.current = <About />;
    } else if (ui.ctxInfoPane === 'contact') {
        content.current = <Contact />
    }

    return (
        <div className={`info-pane ${ui.ctxInfoPane === '' ? 'info-pane-hidden' : ''}`}> 
            <button className="info-nav-bar" onClick={handleBack}>
                <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                </svg>
            </button>
            { content.current }
        </div>
    )
}

export default InfoPane

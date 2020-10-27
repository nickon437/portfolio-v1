import React, { useContext } from 'react'
import { UiContext } from '../context/UiContext'
import About from './About';

const InfoPane = () => {
    const [ui, setUi] = useContext(UiContext);
    let content = null;

    const handleBack = () => {
        setUi((prevUi) => ({
            ...prevUi,
            ctxInfoPane: '',
        }));
    }

    if (ui.ctxInfoPane === 'about') {
        content = <About />;
    } else {
        content = null;
    }

    return (
        <div className={ui.ctxInfoPane === '' ? 'hidden' : ''}> 
            <button className="info-nav-bar" onClick={handleBack}>
                <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                </svg>
            </button>
            { content }
        </div>
    )
}

export default InfoPane

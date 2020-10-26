import React, { useContext } from 'react'
import Icons from '../assets/values/Icons'
import { UiContext } from '../context/UiContext';

export default function Intro() {
    const [ui, setUi] = useContext(UiContext);
    
    const handleClickAbout = () => {
        setUi((prevUi) => ({
            ...prevUi,
            ctxIsAboutActive: true,
        }));
    }
    
    return (
        <div id="intro">
            <div className="heading">Hi, I am Nick <img src={Icons.yay.logo} alt={Icons.yay.alt}/></div>
            <div className="content">A front-end developer who wants to bring the optimal experience with intuitive design, and scalable application.</div>
            <div className="content">Read more <button type="button" className="link" onClick={handleClickAbout}>about me</button> or <button type="button" className="link">contact me</button>.</div>
        </div>
    )
}

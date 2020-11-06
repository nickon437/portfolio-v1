import React, { useContext } from 'react'
import Icons from '../assets/values/Icons'
import { UiContext } from '../context/UiContext';

export default function Intro() {
    const [ui, setUi] = useContext(UiContext);
    
    const handleOpenPane = (e) => {
        setUi((prevUi) => ({
            ...prevUi,
            ctxInfoPane: e.target.name,
        }));
    }

    return (
        <div id="intro">
            <div className="heading">Hi, I am Nick <img src={Icons.yay.logo} alt={Icons.yay.alt} name={Icons.yay.name}/></div>
            <div className="content">A front-end developer who wants to create the optimal experience with intuitive design, and scalable applications.</div>
            <div className="content">Read more <button type="button" className="link" name="about" onClick={handleOpenPane}>about me</button> or <button type="button" className="link" name="contact" onClick={handleOpenPane}>contact me</button>.</div>
        </div>
    )
}

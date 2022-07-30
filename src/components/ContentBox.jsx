import { useEffect, useState } from 'react'

function ContentBox(props) {
    const [state, setState] = useState("About")
    // console.log("Call ContentBox")
    let con = <p>Poo</p>

    let showContact = () => setState("Contact")
    let showAbout = () => setState("About")
    let showExperience = () => setState("Experience")
    let showResume = () => setState("Resume")

    if (state == 'About') {con = <p>About text</p>}
    else if (state == 'Contact') {con = <p>Contact text</p>}
    else if (state == 'Experience') {con = <p>Experience text</p>}
    else if (state == 'Resume') {con = <p>Resume Image</p>}
    else {setState('About')}

    return (
        <div>
            <div className="main">
                <div id="sidebar">
                    <button className="nav" onClick={showAbout}>About</button>
                    <button className="nav" onClick={showContact}>Contact</button>
                    <button className="nav" onClick={showExperience}>Experience</button>
                    <button className="nav" onClick={showResume}>Resume</button>
                </div>
                <div id="content">
                    {con}
                </div>
                {/* <updateBody state={state}></updateBody> */}
            </div>
        </div>
    )
} export default ContentBox;
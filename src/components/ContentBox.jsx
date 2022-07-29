// const [state, setState] = useState("About")
// // useEffect(() => updateBody(content), [content])
// // useEffect(updateBody, [state])
// function updateBody(state) {
//     let con = document.getElementById("content")
//     con.textContent("Hello")
//     switch (state) {
//         case 'About':
//             component = <p>About text</p>
//         case 'Contact':
//             component = <p>Contact text</p>
//         case 'Experience':
//             component = <p>Experience text</p>
//         case 'Resume':
//             component = <p>Resume pdf/image</p>
//     }
//     con.innerHTML = component

// }

// let printState = () => console.log("show" + state)

import { useEffect, useState } from 'react'

// let showContact = () => {
//     // printState()
//     console.log("")
//     setState("Contact")
// }
// let showAbout = () => {
//     console.log("Show About")
//     setState("About")
// }
// let showExperience = () => {
//     console.log("Show Experience")
//     setState("Experience")
// }
// let showResume = () => {
//     console.log("Show Resume")
//     setState("Resume")
// }


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
            <h1>Dylan M Ang</h1>
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
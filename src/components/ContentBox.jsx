import { useEffect, useState } from 'react'
import NavButton from './NavButton'
import { About, Contact, Experience, Resume } from './Pages'
import { faCow, faAddressCard, faCodeBranch, faFile} from '@fortawesome/free-solid-svg-icons'

function ContentBox(props) {
    // Used to route content
    const [state, setState] = useState("About")

    // Button Functions
    let showContact = () => setState("Contact")
    let showAbout = () => setState("About")
    let showExperience = () => setState("Experience")
    let showResume = () => setState("Resume")

    // Site Content
    let con = <p></p>
    if (state == 'About') { con = <About/>}
    else if (state == 'Contact') { con = <Contact/> }
    else if (state == 'Experience') { con = <Experience/> }
    else if (state == 'Resume') { con = <Resume/> }
    else { setState('About') }

    return (
        <div>
            <div className="main">
                <div id="sidebar">
                    <NavButton label="About" icn={faCow} fun={showAbout}/>
                    <NavButton label="Contact" icn={faAddressCard} fun={showContact}/>
                    <NavButton label="Experience" icn={faCodeBranch} fun={showExperience}/>
                    <NavButton label="Resume" icn={faFile} fun={showResume}/>
                </div>
                <div id="content">
                    {con}
                </div>
            </div>
        </div>
    )
} export default ContentBox;
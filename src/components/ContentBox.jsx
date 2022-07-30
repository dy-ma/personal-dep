import { useEffect, useState } from 'react'
import NavButton from './NavButton'
import { About, Contact, Experience, Resume } from './Pages'
import { faCow, faAddressCard, faCodeBranch, faFile } from '@fortawesome/free-solid-svg-icons'

let stateMap = {
    'About': <About />,
    'Contact': <Contact />,
    'Experience': <Experience />,
    'Resume': <Resume />
}

function ContentBox(props) {
    // Used to route content
    const [state, setState] = useState("About")

    // Site Content
    let con = stateMap[state]

    return (
        <div className="main">
            <div id="sidebar">
                <NavButton label="About" icn={faCow} fun={setState} />
                <NavButton label="Contact" icn={faAddressCard} fun={setState} />
                <NavButton label="Experience" icn={faCodeBranch} fun={setState} />
                <NavButton label="Resume" icn={faFile} fun={setState} />
            </div>
            <div id="content">
                {con}
            </div>
        </div>
    )
} export default ContentBox;

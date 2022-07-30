import { useEffect, useState } from 'react'
import NavButton from './NavButton'
import { About, Contact, Experience, Resume } from './Pages'
import { faCow, faAddressCard, faCodeBranch, faFile} from '@fortawesome/free-solid-svg-icons'

let stateMap = {
    'About': <About/>,
    'Contact': <Contact/>,
    'Experience': <Experience/>,
    'Resume': <Resume/>
}

function ContentBox(props) {
    // Used to route content
    const [state, setState] = useState("About")

    // Button Functions
    let show = (page) => setState(page)

    // Site Content
    let con = stateMap[state]

    return (
        <div>
            <div className="main">
                <div id="sidebar">
                    <NavButton label="About" icn={faCow} fun={show}/>
                    <NavButton label="Contact" icn={faAddressCard} fun={show}/>
                    <NavButton label="Experience" icn={faCodeBranch} fun={show}/>
                    <NavButton label="Resume" icn={faFile} fun={show}/>
                </div>
                <div id="content">
                    {con}
                </div>
            </div>
        </div>
    )
} export default ContentBox;

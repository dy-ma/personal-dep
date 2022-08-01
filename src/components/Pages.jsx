import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <div class="about">
            <h2 class="contentHeader">About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}


function Contact() {
    let email = {};
    email.name = "dylanmouang"
    email.service = "gmail"
    let githubURL = "https://github.com/stack-dylan";
    let linkedinURL = "https://www.linkedin.com/in/dylan-mou-ang/";

    let clip = () => {
        let email = "dylanmouang@gmail.com"
        navigator.clipboard.writeText("dylanmouang@gmail.com").then(() => {
            // alert("Copied Email: " + email)
            let b = document.getElementById("mail-btn")
            b.textContent = "Email Copied!"
        })
    }

    return (
        <div class="contact">
            <h2 class="contentHeader">Contact Me</h2>
            <div class="btn-row column">
                <button id="mail-btn" class="btn-redirect-round" onClick={clip}>Email</button>
                <a class="btn-redirect-round" target="_blank" href={githubURL}>GitHub</a>
                <a class="btn-redirect-round" target="_blank" href={linkedinURL}>LinkedIn</a>
            </div>
        </div>
    )
}

function Experience() {
    return (
        <div class="experience">
            <h2 class="contentHeader">My Experience</h2>
            <p>Thanks for Reading!</p>
        </div>
    )
}

function Resume() {
    let pdfResume = "https://drive.google.com/file/d/1Ns4EY-H9O0SItTdTk8saTyGQHeyeaMkH/"
    let docxResume = "https://docs.google.com/document/d/18LHviOqgsqC7gH85q39rG-dBzwq8w-Cx/";
    let newtabIcon = <FontAwesomeIcon class="nav-icn newtab" icon={faArrowUpRightFromSquare}/>
    return (
        <div class="resume">
            <h2 class="contentHeader">My Resume 
            </h2>
            <div class="btn-row">
                <a class="btn-redirect-round" href={pdfResume} target="_blank">{newtabIcon}Save as PDF</a>
                <a class="btn-redirect-round" href={docxResume} target="_blank">{newtabIcon}Save as DOCX</a>
            </div>
            <h3>Profile</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <h3>Education</h3>
            <ul>
                <li>University of California, Davis — Computer Science, 2024</li>
                <li>GPA — 3.77</li>
                <li>Relevant Coursework
                    <ul>
                        <li>Data Structures and Algorithms</li>
                        <li>Web Development — React, Node</li>
                        <li>Intro to AI — Alpha Beta Pruning, PyTorch</li>
                    </ul>
                </li>
            </ul>
            
            <h3>Projects</h3>
            <b>Project name</b>
            
            <h3>Skills</h3>
            <ul>
                <li>Significant Experience In — Python, JavaScript</li>
                <li>Comfortable Working in — React.js, Node.js, C/C++, SQLite3, R</li>
                <li>I Have Used — PyTorch, Google Cloud Platform, Flask</li>
            </ul>
        </div>
    )
}

export { About, Contact, Experience, Resume }
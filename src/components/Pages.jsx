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
    return (
        <div class="contact">
            <h2 class="contentHeader">Contact Me</h2>
            <ul>
                <li>{email.name}@{email.service}.com</li>
                <li><a class="link" href="https://github.com/stack-dylan">GitHub</a></li>
                <li><a class="link" href="https://www.linkedin.com/in/dylan-mou-ang/">LinkedIn</a></li>
            </ul>
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
    let resumeLink = "https://drive.google.com/file/d/1Ns4EY-H9O0SItTdTk8saTyGQHeyeaMkH/view?usp=sharing"
    return (
        <div class="resume">
            <h2 class="contentHeader">My Resume 
                <a href={resumeLink} target="_blank">
                    <FontAwesomeIcon class="nav-icn newtab" icon={faArrowUpRightFromSquare}/>
                </a>
            </h2>
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
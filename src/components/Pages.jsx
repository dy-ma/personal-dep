import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faAt, faLink } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'

import githubProfilePic from "../assets/github-profile.png"
import linkedinProfilePic from "../assets/linkedin-profile.png"
import gmailPic from "../assets/gmail-page.png"

import pdf from "../static/resume.pdf"


function About() {
    return (
        <div class="about">
            <h2 class="contentHeader">About Me</h2>
            <p>Hi, I'm Dylan, a web developer with experience in frontend and backend design with SQLite3, Express, React, and Node. I've developed dashboards (Chart.js) for visualizing interactive data to help engineering teams make smarter decisions in testing. Currently I'm a Bachelors student of CS at UC Davis, projected to graduate in 2024.</p>
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
            let card = b.firstChild;
            card.childNodes[1].firstChild.textContent = "Email Copied!";
        })
    }

    return (
        <div class="contact">
            <h2 class="contentHeader">Contact Me</h2>
            <div class="card-row">
                <a target="_blank" href={githubURL}>
                    <Card image={githubProfilePic}
                        label="Github"
                        icon={faGithubAlt} />
                </a>
                <a target="_blank" href={linkedinURL}>
                    <Card image={linkedinProfilePic}
                        label="LinkedIn"
                        icon={faLinkedin} />
                </a>
                <button id="mail-btn" onClick={clip}>
                    <Card image={gmailPic}
                        label="Copy Email"
                        icon={faAt} />
                </button>
            </div>
        </div>
    )
}

function Experience() {
    return (
        <div class="experience">
            <h2 class="contentHeader">My Experience</h2>
            <h4>Applications Engineering Intern, Arista Networks; San Jose, CA — Summer 2022</h4>
            <p>Wrote a script with Node.js to conditionally extract elements from a list of web pages, saving 4+ hours of manual QA time.  Created a metadata search tool in SalesForce using Flow and Apex to provide sales team faster queries for adjusting records.</p>
            <h4>Software Team, Formula Racing Team at UCD; Davis, CA — Fall 2020—present</h4>
            <p>Created a web app to read incoming telemetry data over USB and display it with the C3.js charting library. This tool replaced the previous system of MATLAB graphing scripts with a unified, interactive app. The page is deployed over Github Pages, live charting capabilities are enabled by running the server code on a local machine.</p>
        </div>
    )
}

function Resume() {
    // let pdfResume = "pdf"
    let docxResume = "https://docs.google.com/document/d/18LHviOqgsqC7gH85q39rG-dBzwq8w-Cx/";
    let newtabIcon = <FontAwesomeIcon class="btn-icons" icon={faArrowUpRightFromSquare} />
    return (
        <div class="resume">
            <h2 class="contentHeader">My Resume
            </h2>
            <div class="btn-row">
                <a class="btn-redirect-round" href={pdf} target="_blank">{newtabIcon}Save as PDF</a>
                <a class="btn-redirect-round" href={docxResume} target="_blank">{newtabIcon}Save as DOCX</a>
            </div>
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
            <b>Water Level - 2022</b>
            <p>A full stack web app using Node and React that displays the water level of several man made reservoirs in California. The  backend is written with Express.js and fetches the data from the CDEC api. The React frontend displays the data in a bar chart with Chart.js and uses react-month-picker for data selection.</p>

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
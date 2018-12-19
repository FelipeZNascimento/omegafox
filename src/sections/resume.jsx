import React, { Component } from 'react';
// import './resume.scss';
import SkillTag from '../components/skill_tag.jsx';
import Experience from '../components/experience.jsx';

let skills = [
    {description: "Agile", type: "technical"},
    {description: "Ajax", type: "technical"},
    {description: "Angular JS", type: "technical"},
    {description: "Bootstrap", type: "technical"},
    {description: "C/C++", type: "technical"},
    {description: "CSS", type: "technical"},
    {description: "English"},
    {description: "French"},
    {description: "GIT", type: "technical"},
    {description: "HTML", type: "technical"},
    {description: "Java", type: "technical"},
    {description: "Javascript", type: "technical"},
    {description: "jQuery", type: "technical"},
    {description: "JSON", type: "technical"},
    {description: "Linux", type: "technical"},
    {description: "Materialize CSS", type: "technical"},
    {description: "MongoDB", type: "technical"},
    {description: "MVC", type: "technical"},
    {description: "MySQL", type: "technical"},
    {description: "Node JS", type: "technical"},
    {description: "PHP", type: "technical"},
    {description: "Portuguese"},
    {description: "Python", type: "technical"},
    {description: "REST APIs", type: "technical"},
    {description: "React JS", type: "technical"},
    {description: "SASS", type: "technical"},
    {description: "SCSS", type: "technical"},
    {description: "Shell Script", type: "technical"},
    {description: "Spanish"},
    {description: "Vue JS", type: "technical"},
];

let experiences = [
    {
        company: "Vivo Telefônica", 
        start: "Jan 2017", 
        end: "Jul 2018", 
        title: "Senior Analyst", 
        description: "Design and development of next-gen set-top box (Pay TV Set) in all Latin America. The project was entirely developed using QT framework (QML for the front, C++ and Python for the backend) and was set using agile techniques. Worked as fullstack analyst."
    },
    {
        company: "ExxonMobil BSC", 
        start: "Jan 2015", 
        end: "Dec 2016", 
        title: "Junior Analyst", 
        description: "Hired as an intern and promoted to fulltime analyst, I've worked with the innovation team to developed web apps in order to promote agile techniques at the company. Using AngularJS I created an online Kanban board using MS Sharepoint as a database (and its REST API to handle data) to help Project Managers in dealing with daily tasks."
    },
    {
        company: "Accenture", 
        start: "Fev 2013", 
        end: "Aug 2014", 
        title: "Intern", 
        description: "I did my first internship as a Computer Science student in one of the biggest consulting companies in the world. I've worked as an ABAP analyst and developer."
    },

]


class Resume extends Component {
    render () {
        const renderSkills = skills.map((skill, index) => {
            return (
                <SkillTag key={index} description={skill.description} />
            )
        });

        const renderExperiences = experiences.map((experience, index) => {
            return (
                <Experience key={index} company={experience.company} start={experience.start} end={experience.end} title={experience.title} description={experience.description} />
            )
        });

        return (
            <div id="resume" className="section-container beige-bg">
                <div className="title">
                    <p>resume</p>
                </div>
                <div className="section-content">
                    <div className="section-column">
                        <p className="sub-title center-align">education</p>
                        <p className="center-align">B.Sc. Computer Science at <a href="http://www.ufpr.br/portalufpr/">UFPR</a></p><br /><br />
                        <div className="quote">
                            <blockquote><p>Research is what I'm doing when I don't know what I'm doing.</p></blockquote>
                            <p className="right-align">Wernher von Braun</p>
                        </div>
                    </div>
                    <div id="skills" className="section-column">
                        <p className="sub-title center-align">skills</p>
                        <p className="center-align">{renderSkills}</p>
                    </div>
                </div>
                <div className="section-content row-oriented">
                    <p className="sub-title center-align">experience</p>
                    <div>{renderExperiences}</div>
                </div>
            </div>
        )
    }
}

export default Resume;
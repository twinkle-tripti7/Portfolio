import React, { useState } from 'react';
import image from '../Images/WhatsApp Image 2024-05-28 at 01.07.14_a831aa8b.jpg';

function About() {
    const [showSkills, setShowSkills] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    const [showCodingProfile, setShowCodingProfile] = useState(false);

    const toggleSkills = () => {
        setShowSkills(!showSkills);
        setShowEducation(false);
        setShowCodingProfile(false);
    };

    const toggleEducation = () => {
        setShowEducation(!showEducation);
        setShowSkills(false);
        setShowCodingProfile(false);
    };

    const toggleCodingProfile = () => {
        setShowCodingProfile(!showCodingProfile);
        setShowSkills(false);
        setShowEducation(false);
    };

    return (
        <>
            <div className='big_div'>
                <div className='myimage'>
                    <img src={image} alt="Profile" />
                </div>
                <div className='AboutMe' id="about">
                    <h1>About Me</h1>
                    <p className='describe'>Hello, I'm Tripti Barnwal, a B.Tech student in Computer Science and Engineering at C.V. Raman Global University, Bhubaneswar. I am passionate about web development with expertise in both front-end and back-end technologies, specializing in creating responsive web designs for optimal user experience.

                        I have a strong foundation in data structures and algorithms using Java, which enhances my problem-solving skills. My involvement in the NSS unit at CGU has helped me develop leadership and collaborative abilities. I am dedicated to continuous learning and am particularly interested in machine learning. Currently, I am seeking internship opportunities to gain practical experience and contribute to meaningful projects.
                    </p>
                    <nav className='nav_bar'>
                        <h3 className='nav-skills' onClick={toggleSkills}>Skills</h3>
                        <h3 className='nav-education' onClick={toggleEducation}>Education</h3>
                        <h3 className='nav-coding-profile' onClick={toggleCodingProfile}>Coding Profile</h3>
                    </nav>
                    {showSkills && (
                        <div className='skills-grid' >
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>SCSS</span>
                            <span>JavaScript</span>
                            <span>Angular.js</span>
                            <span>React.js</span>
                            <span>Tailwind CSS</span>
                            <span>Bootstrap</span>
                            <span>Redux</span>
                            <span>Responsive Web Design</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>Flask</span>
                            <span>Java</span>
                            <span>Python</span>
                            <span>C++</span>
                            <span>MongoDB</span>
                            <span>DBMS</span>
                            <span>OS</span>
                            <span>MySQL</span>
                            <span>Git & Github</span>
                            <span>Netlify</span>
                            <span>Heroku</span>
                            <span>Babel</span>
                            <span>Software Development</span>
                            <span>Leadership</span>
                            <span>Public Speaking</span>
                            <span>Numpy</span>
                            <span>Matplotlib</span>
                            <span>Pandas</span>
                        </div>
                    )}
                    {showEducation && (
                        <div className='education-section' >
                            <p>2022-2026</p>
                            <p>C.V. Raman Global University</p>
                            <p>CGPA: 9.2</p>
                            <br />
                            <p>2020-2022</p>
                            <p>DAV Model School, CFRI</p>
                            <p>Score: 94%</p>
                            <br />
                            <p>2008-2020</p>
                            <p>Mount Carmel School Digwadih</p>
                            <p>Score: 94.4%</p>
                        </div>
                    )}
                    {showCodingProfile && (
                        <div className='coding-profile-section'>
                            <a href="https://leetcode.com/u/tipu_07/" target="_blank" rel="noopener noreferrer">LeetCode</a>

                            <br />
                            <a href="https://www.codechef.com/users/tipu_07" target="_blank" rel="noopener noreferrer">CodeChef</a>
                            <br />
                            <a href="https://github.com/twinkle-tripti7" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <br />
                            <a href="https://www.hackerrank.com/profile/triptibarnwal1" target="_blank" rel="noopener noreferrer">Hackerrank</a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default About;

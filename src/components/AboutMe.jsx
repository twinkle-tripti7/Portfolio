import React, { useState } from 'react';
import image from '../Images/WhatsApp Image 2024-05-28 at 01.07.14_a831aa8b.jpg';

function About() {
    const [showSkills, setShowSkills] = useState(true);
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
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6">
                <div className="w-full md:w-1/3">
                    <img src={image} alt="Profile" className="rounded-lg shadow-lg" />
                </div>

                <div className="w-full md:w-2/3">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Hello, I'm Tripti Barnwal, a B.Tech student in Computer Science and Engineering at C.V. Raman Global University, Bhubaneswar. I am passionate about web development with expertise in both front-end and back-end technologies, specializing in creating responsive web designs for optimal user experience.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        I have a strong foundation in data structures and algorithms using Java, which enhances my problem-solving skills. My involvement in the NSS unit at CGU has helped me develop leadership and collaborative abilities. I am dedicated to continuous learning and am particularly interested in machine learning. Currently, I am seeking internship opportunities to gain practical experience and contribute to meaningful projects.
                    </p>

                    <nav className="flex space-x-6 border-t border-gray-300 pt-4">
                        <button 
                            onClick={toggleSkills} 
                            className={`text-lg font-semibold ${showSkills ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                        >
                            Skills
                        </button>
                        <button 
                            onClick={toggleEducation} 
                            className={`text-lg font-semibold ${showEducation ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                        >
                            Education
                        </button>
                        <button 
                            onClick={toggleCodingProfile} 
                            className={`text-lg font-semibold ${showCodingProfile ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                        >
                            Coding Profile
                        </button>
                    </nav>

                    {showSkills && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                            {[
                                'HTML5', 'CSS3', 'SCSS', 'JavaScript', 'Angular.js', 'React.js', 'Tailwind CSS',
                                'Bootstrap', 'Redux', 'Responsive Web Design', 'Node.js', 'Express.js', 'Flask',
                                'Java', 'Python', 'C++', 'MongoDB', 'DBMS', 'OS', 'MySQL', 'Git & GitHub',
                                'Netlify', 'Heroku', 'Babel', 'Software Development', 'Leadership', 'Public Speaking',
                                'Numpy', 'Matplotlib', 'Pandas'
                            ].map(skill => (
                                <span 
                                    key={skill} 
                                    className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}

                    {showEducation && (
                        <div className="mt-6 space-y-4">
                            <div>
                                <p className="text-lg font-semibold">2022-2026</p>
                                <p className="text-gray-700">C.V. Raman Global University</p>
                                <p className="text-gray-500">CGPA: 9.2</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">2020-2022</p>
                                <p className="text-gray-700">DAV Model School, CFRI</p>
                                <p className="text-gray-500">Score: 94%</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">2008-2020</p>
                                <p className="text-gray-700">Mount Carmel School Digwadih</p>
                                <p className="text-gray-500">Score: 94.4%</p>
                            </div>
                        </div>
                    )}

                    {showCodingProfile && (
                        <div className="mt-6 space-y-4">
                            <a 
                                href="https://leetcode.com/u/tipu_07/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-purple-600 hover:underline"
                            >
                                LeetCode
                            </a>
                            <a 
                                href="https://www.codechef.com/users/tipu_07" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-purple-600 hover:underline"
                            >
                                CodeChef
                            </a>
                            <a 
                                href="https://github.com/twinkle-tripti7" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-purple-600 hover:underline"
                            >
                                GitHub
                            </a>
                            <a 
                                href="https://www.hackerrank.com/profile/triptibarnwal1" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-purple-600 hover:underline"
                            >
                                Hackerrank
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default About;

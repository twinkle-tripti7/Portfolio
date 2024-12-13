import React from 'react';

const certifications = [
    {
        title: "Introduction to CyberSecurity",
        description: "Earned this certificate for completing the basics of CyberSecurity.",
        buttonLink: "https://www.credly.com/badges/18053b3d-97d6-4852-8649-8f9368f67965/linked_in_profile",
    },
    {
        title: "Java Certification",
        description: "This was certified by HackerRank for the Java Skills Test.",
        buttonLink: "https://www.hackerrank.com/certificates/afa3d942cdc6",
    },
    {
        title: "Problem-Solving Certification",
        description: "This was certified by HackerRank for the Problem-Solving Skills Test.",
        buttonLink: "https://www.hackerrank.com/certificates/7c08c850f5ed",
    }
];

const CertificationCard = ({ title, description, buttonLink }) => {
    return (
        <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card-link"
        >
            <div className="certification-card w-72 h-96 relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                {/* Front Side */}
                <div className="card-front absolute w-full h-full">
                    <img
                        src="https://images.pexels.com/photos/2232567/pexels-photo-2232567.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Certification"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                {/* Back Side */}
                <div className="card-back absolute w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 text-white flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg">
                    <h5 className="text-2xl font-bold mb-2 text-center">{title}</h5>
                    <p className="text-sm px-4 text-center">{description}</p>
                </div>
            </div>
        </a>
    );
};

const Certifications = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                    My Certifications
                </h2>
                <p className="text-gray-600">
                    Explore the certifications I’ve earned for my technical skills.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {certifications.map((cert, index) => (
                    <CertificationCard
                        key={index}
                        title={cert.title}
                        description={cert.description}
                        buttonLink={cert.buttonLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Certifications;

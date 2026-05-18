import React from 'react';
const myProjects = [
    {
        title: "RestAPI",
        description: "A Robust Backend RestAPI Project",
        tech: ["Springboot", "MySQL", "JPA", "Spring Security"]
    },
    {
        title: "Post Graduate Microservice Application",
        description: "Microservice web application for university course management system",
        tech: ["Springboot", "MySQL", "React.js", "JWT"]
    },
    {
        title: "Library Management System",
        description: "Library management system for storing books and records for University",
        tech: ["Java servlet", "Mysql", "Jsp", "Themeleaf"]
    }
]
function Projects() {
    return (
        <div className='py-20 bg-gray-800 text-white px 6'>
            <div className='max-w-5xl mx-auto'>
                <h2 className='text-4xl font-bold mb-12 text-center'>Some of my works</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {myProjects.map((project, idx) => (
                        <div key={idx} className='bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors'>
                            <h3 className='text-2xl font-bold mb-3'>{project.title}</h3>
                            <p className='text-gray-400 mt-3'>{project.description}</p>
                            <span className='text-indigo-400 text-sm font-semibold'>
                                {project.tech.toString()}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}
export default Projects;
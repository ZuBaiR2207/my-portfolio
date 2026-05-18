import React from 'react';
function About() {
    return (
        <div className='py-20 bg-gray-800 text-white px-6'>
            <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10'>
                {/* Left Side: Text */}
                <div className='flex-1'>
                    <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                    <p className='text-gray-300 text-lg mb-4'>
                        I am currently pursuing my Bachelor in IT. As a backend developer, I have a deep fascination for architecting robust systems and solving complex logic problems.
                    </p>
                    <p className="text-gray-300 text-lg">
                        I'm always eager to learn new technologies (like React!) and looking for a great environment to grow my skills.
                    </p>
                </div>

                {/* Right Side: */}
                <div className="w-64 h-64 bg-indigo-500 rounded-xl flex items-center justify-center shadow-2xl">
                    <span>👨‍💻</span>

                </div>

            </div>

        </div>
    );
}
export default About;
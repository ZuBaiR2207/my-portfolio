import React from 'react';
import { Mail, Phone, GitPullRequest } from 'lucide-react';
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
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-4 text-gray-300">
                            <Mail className="text-indigo-500" />
                            <span>zjubair2122@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <Phone className="text-indigo-500" />
                            <span>+60147511715</span>
                        </div>
                        <div className='flex items-center gap-4 text-gray-300'>
                            <GitPullRequest className="text-indigo-500" />
                            <span><a href="https://github.com/zjubair2122">Github.com/zjubair2122</a></span>
                        </div>
                        <div className='flex items-center gap-4 text-gray-300'>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1YzRjZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHlsZT0ib3BhY2l0eToxOyI+PHBhdGggZD0iTTE2IDhhNiA2IDAgMCAxIDYgNnY3aC00di03YTIgMiAwIDAgMC0yLTJhMiAyIDAgMCAwLTIgMnY3aC00di03YTYgNiAwIDAgMSA2LTZNMiA5aDR2MTJIMnoiLz48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMiIvPjwvc3ZnPg==" alt="" className='text-indigo-500 ' />
                            <span><a href="https://www.linkedin.com/in/zubair-md-talha-zubairmdtalha22/">Zubair Md Talha</a></span>
                        </div>
                    </div>
                </div>

                {/* Right Side: */}
                <div className="w-64 h-64 bg-indigo-500 rounded-xl flex items-center justify-center shadow-2xl">
                    <img src="https://media.licdn.com/dms/image/v2/D5603AQH7dpC_ML6lqg/profile-displayphoto-crop_800_800/B56Z48uYvTHEAI-/0/1779135254879?e=1780531200&v=beta&t=kunyh1WpukGPBsjZaBe-vKotdXVhtl_3wwHPfsyihaw" alt=""
                        className='rounded-xl' />

                </div>

            </div>

        </div>
    );
}
export default About;
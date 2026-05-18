import React from 'react';
function Contact() {
    return (
        <div className="py-20 bg-gray-800 text-white px-6 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className='text-4xl font-bold mb-6'>
                    Get in touch
                </h2>
                <p className='text-gray-400 mb-10'>
                    Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <form className='flex flex-col gap-4 max-w-md mx-auto'>
                    <input type="text" placeholder='Your name' className='p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500' />
                    <input type="email" placeholder='Your email' className='p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500' />
                    <textarea placeholder='Your message' className='p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500' />
                    <button type='submit' className='p-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors'>Send Message</button>
                </form>
            </div>
        </div>
    );
}
export default Contact;
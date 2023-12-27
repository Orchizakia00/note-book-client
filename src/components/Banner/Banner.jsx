/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-[calc(100vh-40px)]" style={{ backgroundImage: 'url(https://i.ibb.co/9qDbvHR/4664.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg text-gray-200">
                    <h1 className="mb-5 text-5xl font-bold">Note Book</h1>
                    <p className="mb-5">Unleash creativity and organize thoughts effortlessly with NoteBook Hub. Capture, store, and manage your notes seamlessly. Collaborate in real-time, access from anywhere. Elevate your productivity with our intuitive note-taking experience</p>
                    <Link to={'/all-notes'}><button className="btn bg-blue-600 text-white border-none">Let's Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import UsernameInput from './Username';

const PortfolioTemplate = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 ">
      <header className="bg-blue-300 text-white py-8 text-center rounded-lg">
        <h1 className="text-3xl font-bold">{UsernameInput}</h1>
        <p className="text-lg">Web Developer</p>
      </header>

      <main className="max-w-5xl mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p>
            I'm a passionate web developer with experience in building modern and responsive web applications. I love
            coding and creating beautiful websites that provide a great user experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="text-lg font-bold">Portfolio Website</h3>
              <p>Designed and developed my own portfolio website using React and Tailwind CSS.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="text-lg font-bold">E-commerce Website</h3>
              <p>Built a fully functional e-commerce website for a client using MERN stack.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Contact Me</h2>
          <p>
            Feel free to contact me if you have any questions or job opportunities. You can reach me at
            john@example.com.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PortfolioTemplate;

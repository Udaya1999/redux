import React from "react";

const AboutMe = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-300 mt-5 mb-5">
      {/* Profile Picture */}
      <div className="flex justify-center">
        <img
          src="/profile1.jpg" // Ensure this image is in the public folder
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover shadow-lg border-2 border-gray-400"
        />
      </div>

      {/* Name */}
      <h2 className="text-center text-xl font-bold text-gray-800 mt-4">
        Udaya Bhaskar Konka
      </h2>

      {/* Experience & Previous Company */}
      <div className="flex justify-between text-gray-700 mt-4">
        <p>
          Experience: <strong>2.9 Years</strong>
        </p>
        <p>
          Prev Company: <strong>Infosys</strong>
        </p>
      </div>

      {/* About Me Section */}
      <div className="mt-6">
        <h3 className="text-blue-600 font-semibold underline">About Me!</h3>
        <p className="text-gray-700 mt-2">
          Front-End Developer with 2 years and 9 months of experience
          specializing in JavaScript, React.js, and Node.js . Passionate about
          building intuitive, high-performance web applications and writing
          clean, efficient code. Adept at developing scalable front-end
          solutions and collaborating with cross-functional teams to drive
          impactful user experiences. Seeking an opportunity in a dynamic and
          growth-oriented company where I can leverage my skills to contribute
          effectively while continuously learning and evolving.
        </p>
        {/* View Resume Button */}
        <div className="flex justify-center mt-4">
          <a
            href="/Uday_Reactjs_Dev_2.9YOE.pdf" // Ensure your resume is placed inside the 'public' folder
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 font-semibold"
          >
            📄 View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

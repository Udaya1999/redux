const Footer = () => {
    return (
      <footer className="w-full bg-gray-900 text-white py-8 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-4 md:space-y-0">
          <p className="text-lg font-semibold">© {new Date().getFullYear()} Redux Project</p>
  
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="https://hit-frontend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-lg hover:text-blue-400 transition"
            >
              📚 E-Learn Project
            </a>
            <a
              href="https://linkedin.com/in/udaya-bhaskar-168107242"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-lg hover:text-blue-400 transition"
            >
              🔗 LinkedIn
            </a>
            <a href="mailto:your-email@gmail.com" className="flex items-center space-x-2 text-lg hover:text-blue-400 transition">
              📧 udayabhaskar209@gmail.com
            </a>
            <p className="flex items-center space-x-2 text-lg">📞 +91 8184919984</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
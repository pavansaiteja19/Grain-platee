import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">GrainPalette</h3>
            <p className="text-gray-300 text-sm">
              A deep learning odyssey in rice type classification using AI/ML technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="https://www.tensorflow.org/js" className="hover:text-blue-400 transition-colors">TensorFlow.js</a></li>
              <li><a href="https://reactjs.org/" className="hover:text-blue-400 transition-colors">React</a></li>
              <li><a href="https://tailwindcss.com/" className="hover:text-blue-400 transition-colors">Tailwind CSS</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm">
              Have questions or suggestions? <br />
              <a href="mailto:info@grainpalette.com" className="text-blue-400 hover:underline">info@grainpalette.com</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {currentYear} GrainPalette. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
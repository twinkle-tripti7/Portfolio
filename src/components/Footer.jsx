import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <h4 className="text-sm md:text-base font-medium">
          &copy; {new Date().getFullYear()} || All rights reserved
        </h4>
        <p className="text-xs mt-2">
          Built with ❤️ by Tripti
        </p>
      </div>
    </footer>
  );
}

export default Footer;

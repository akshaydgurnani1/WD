import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-300 mt-10 text-white py-8 rounded-lg">
      <div className="container mx-auto text-blue-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <h2 className="text-xl font-bold">About Us</h2>
            <p className='text-justify'>Website builders typically provide a user-friendly, drag-and-drop interface that allows users to design web pages, add content, and choose from a variety of templates </p>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ol className="mt-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ol>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <address className="mt-4">
              123 Main Street<br />
              City, State 12345<br />
              Email: info@example.com<br />
              Phone: (123) 456-7890
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800 mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

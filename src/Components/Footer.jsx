const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SafeLearn</h3>
            <p className="text-gray-300">
              Providing professional safety training and certification since
              2010.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Workplace Safety
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Fire Safety
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  First Aid & CPR
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Construction Safety
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  View All
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-300 not-italic">
              <p>Safety Courses</p>
              <p>Peshawar Pakistan</p>
              <p className="mt-2">WhatsApp No: 0315-8328227</p>
              <p>Email: jalalcaptain776@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Safety Courses. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

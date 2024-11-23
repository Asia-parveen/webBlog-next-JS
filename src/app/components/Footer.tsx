import Link from "next/link";
import { FaGithub } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1D3557] text-white py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-200">
              BookBlogs is a platform that explores and provides detailed
              reviews on famous books from various genres. Dive deep into your
              favorite books and discover new ones to enjoy.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-gray-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pen" className="text-gray-200 hover:text-white">
                Items
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-200 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-200 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/Asia-parveen" target="_blank" className="text-gray-200 hover:text-white">
                {/* <i className="fab fa-twitter text-2xl"></i> */}
                <FaGithub  className="text-2xl "/ >
              </Link>
              <Link href="https://www.linkedin.com/in/asia-parveen-258a952a7/" target="_blank" className="text-gray-200 hover:text-white">
              <FaLinkedin className="text-2xl "/>
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-gray-200 hover:text-white">
              <FaInstagramSquare className="text-2xl "/>
              </Link>
            </div>
            <div className="pt-[17px] flex">
            <FaPhone /> 
            <p className="font-semibold pl-[5px]">+92 305 1234567</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8 border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-300">&copy; 2024 Asia BookBlogs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

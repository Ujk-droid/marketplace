import React from "react";
import { FaFacebookF, FaGithub, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className=" py-8  border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-8 place-items-start">
          {/* Address */}
          <div className="text-gray-800 dark:text-gray-100 text-sm">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-800 text-sm font-medium mb-3 dark:text-gray-200">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-200 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900  dark:text-gray-200 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-200 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-200 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-gray-700 dark:text-gray-200 text-sm font-medium mb-3">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/account" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 transition">
                  My Account
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-200 transition">
                  Return
                </a>
              </li>
              <li>
                <Link href="/bill" className="text-gray-600 hover:text-gray-900 dark:text-gray-200 transition">
                  Billing Detail
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-600 text-sm font-medium mb-3">Newsletter</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <hr />
          <p className="pt-4">2022 Meubel House. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            {/* Facebook Icon */}
{/*             
            <a
            href="https://github.com/Ujk-droid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors duration-300 text-blue-300"
          >
            <FaGithub />
          </a> */}
            <FaFacebookF
              className="text-blue-600 text-lg md:text-3xl hover:text-blue-800 transition duration-300"
            />
            {/* GitHub Icon */}
           
               
            <a
            href="https://github.com/Ujk-droid"
            target="_blank"
            rel="noopener noreferrer"
            
          >

         
            <FaGithub
              className="text-gray-800 text-lg md:text-3xl hover:text-gray-600 transition duration-300"
            /> </a>
            {/* WhatsApp Icon */}
            <FaWhatsapp
              className=" text-green-500 text-lg md:text-3xl hover:text-green-700 transition duration-300"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Footer.jsx
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 pt-12 pb-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Company */}
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Innovations</a></li>
            <li><a href="#">Business Services</a></li>
            <li><a href="#">Financial services</a></li>
            <li><a href="#">Lejhro Recruiter</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        {/* Column 2 - Programs */}
        <div>
          <h3 className="font-bold mb-3">Programs</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Lejhro Bootcamp</a></li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h3 className="font-bold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Statement</a></li>
          </ul>
        </div>

        {/* Column 4 - Social Icons */}
        <div>
          <h3 className="font-bold mb-3">Connect with us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs mt-10 text-gray-500">
        © 2025 LEJHRO. All Rights Reserved.
      </div>
    </footer>
  );
}

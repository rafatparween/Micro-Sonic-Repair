"use client"

import React from "react";
import { FaTools, FaBookReader, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          About 123printsetupandhelp

        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted guide for solving printer problems with clear, step-by-step solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
             123printsetupandhelp
 is an independent platform dedicated to helping users resolve everyday printer issues through easy-to-understand troubleshooting guides and how-to articles.
            </p>
            <p className="text-gray-700">
              We provide clear, step-by-step information for all major printer brands, including HP, Canon, Epson, Brother, and more.
            </p>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">What We Offer</h2>
            <p className="text-gray-700 mb-6">
              Whether you're facing connectivity problems, ink cartridge errors, setup challenges, or offline issues, our articles aim to help you identify the cause and apply effective solutions.
            </p>
            <p className="text-gray-700">
              We focus on common printer problems and provide solutions that work for most users.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Important Note</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-700">
              We do not offer live technical support, remote repair services, or hardware sales. All content is purely for educational and informational purposes to help users troubleshoot on their own.
            </p>
          </div>
          <p className="text-gray-700">
            Our goal is to empower you with knowledge so you can solve printer issues confidently without needing to wait for professional support.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="text-blue-600 text-4xl mb-4 flex justify-center">
            <FaTools />
          </div>
          <h3 className="text-xl font-semibold mb-2">Practical Solutions</h3>
          <p className="text-gray-600">
            Step-by-step guides for real-world printer problems
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="text-blue-600 text-4xl mb-4 flex justify-center">
            <FaBookReader />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy to Follow</h3>
          <p className="text-gray-600">
            Clear instructions anyone can understand
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="text-blue-600 text-4xl mb-4 flex justify-center">
            <FaShieldAlt />
          </div>
          <h3 className="text-xl font-semibold mb-2">Safe Methods</h3>
          <p className="text-gray-600">
            Tested solutions that won't harm your device
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="text-blue-600 text-4xl mb-4 flex justify-center">
            <FaHandsHelping />
          </div>
          <h3 className="text-xl font-semibold mb-2">Brand Coverage</h3>
          <p className="text-gray-600">
            Help for all major printer manufacturers
          </p>
        </div>
      </div>

      <div className="bg-blue-800 text-white rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help With Your Printer?</h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          Browse our collection of troubleshooting guides and how-to articles to find the solution you need.
        </p>
        <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition duration-300">
          Explore Articles
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
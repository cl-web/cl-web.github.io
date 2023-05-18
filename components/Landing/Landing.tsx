'use client'
import React from 'react';

export default function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-500 p-5 md:p-0">
      <h1 className="text-2xl md:text-5xl text-white mb-2 md:mb-5 text-center">Welcome to Web SPA</h1>
      <p className="text-lg md:text-2xl text-white text-center">Your business solution for top-notch websites</p>
      <div className="mt-5 md:mt-10">
        <a 
          href="#services"
          className="text-white bg-blue-700 hover:bg-blue-900 py-2 px-4 rounded-full block text-center">
          Explore Our Services
        </a>
      </div>
    </div>
  );
}

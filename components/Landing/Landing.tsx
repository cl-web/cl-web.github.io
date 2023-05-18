'use client'
import React from 'react';

export default function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-500">
      <h1 className="text-5xl text-white mb-5">Welcome to Web SPA</h1>
      <p className="text-2xl text-white">Your business solution for top-notch websites</p>
      <div className="mt-10">
        <a 
          href="#services"
          className="text-white bg-blue-700 hover:bg-blue-900 py-2 px-4 rounded-full">
          Explore Our Services
        </a>
      </div>
    </div>
  );
}

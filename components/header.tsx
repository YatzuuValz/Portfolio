'use client';

// import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header
      className="fixed z-90 flex items-center justify-between px-8 py-6 top-0 right-0 left-0 bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-700">
      {/* <div className="text-2xl font-bold text-white">
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Dev</span> 
        <span>Creative</span>
      </div> */}

      <nav className="hidden md:flex items-center space-x-8 text-gray-300">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#" className="hover:text-white transition-colors">Projects</a>
        <a href="#" className="hover:text-white transition-colors">Skills</a>
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </nav>

      {/* <button className="rounded-xl py-3 bg-blue-600 hover:bg-blue-700 text-white px-7">
        Hire Me
      </button> */}
    </header>
  );
}

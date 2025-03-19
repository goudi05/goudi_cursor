import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center text-purple-600 hover:text-purple-700 transition-colors">
            <Logo className="h-8 w-auto" />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-purple-600 hover:text-purple-800 transition-colors">
              首页
            </Link>
            <Link href="/about" className="text-purple-600 hover:text-purple-800 transition-colors">
              关于
            </Link>
            <Link href="/projects" className="text-purple-600 hover:text-purple-800 transition-colors">
              项目
            </Link>
            <Link href="/contact" className="text-purple-600 hover:text-purple-800 transition-colors">
              联系
            </Link>
          </div>

          <button className="md:hidden p-2 rounded-md text-purple-600 hover:text-purple-800 hover:bg-purple-50 transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 
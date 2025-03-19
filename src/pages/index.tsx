import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ImageCarousel from '../components/ImageCarousel';
import ChatBox from '../components/ChatBox';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>测试页面</p>
                <p>如果你能看到这个页面，说明部署成功了！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
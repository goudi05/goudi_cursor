import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ImageCarousel from '../components/ImageCarousel';
import ChatBox from '../components/ChatBox';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-purple-50">
      {/* 半透明遮罩 */}
      <div className="fixed inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none" />
      
      {/* 内容区域 */}
      <div className="relative w-full">
        <Head>
          <title>Goudi - 个人网站</title>
          <meta name="description" content="Goudi的个人网站 - 分享技术与创意" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full">
          <Navbar />
        </div>
        
        {/* 轮播图部分 */}
        <section className="w-full bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 max-w-5xl py-12 pt-16">
            <ImageCarousel />
          </div>
        </section>

        {/* AI助手部分 */}
        <section className="w-full bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 max-w-5xl py-16">
            <ChatBox />
          </div>
        </section>

        {/* 内容部分 */}
        <section className="w-full">
          <div className="container mx-auto px-4 max-w-5xl py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold text-purple-800 mb-4">关于我</h2>
                <div className="space-y-4 text-gray-700">
                  <p>你好！我是一名充满热情的开发者，专注于创建优秀的用户体验和高质量的代码。</p>
                  <p>我热爱学习新技术，并且喜欢将创新想法转化为实际的解决方案。</p>
                  <p>在工作之余，我喜欢参与开源项目，同时也热衷于技术分享和社区交流。</p>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold text-purple-800 mb-4">技能专长</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-purple-700">前端开发</h3>
                    <p className="text-gray-700">React, Next.js, TypeScript, Tailwind CSS</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-purple-700">后端开发</h3>
                    <p className="text-gray-700">Node.js, Python, RESTful APIs</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-purple-700">开发工具</h3>
                    <p className="text-gray-700">Git, Docker, VS Code, Agile/Scrum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
} 
import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      className={className}
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 背景圆形 */}
      <circle cx="20" cy="20" r="18" fill="currentColor" fillOpacity="0.1" />
      
      {/* G字母主体 */}
      <path
        d="M20 38c-9.941 0-18-8.059-18-18S10.059 2 20 2s18 8.059 18 18c0 3.98-1.293 7.663-3.48 10.645"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* 文字部分 */}
      <text
        x="45"
        y="27"
        fill="currentColor"
        fontSize="24"
        fontFamily="Arial"
        fontWeight="bold"
      >
        oudi
      </text>
      
      {/* 装饰点 */}
      <circle cx="20" cy="20" r="2" fill="currentColor" />
    </svg>
  );
} 
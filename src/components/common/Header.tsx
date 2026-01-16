'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/**
 * 프리미엄 미니멀 헤더 컴포넌트
 * - 정제된 타이포그래피와 여백
 * - 에디토리얼 미학
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200/50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <Link to="/" className="flex items-center group">
            <span className="font-serif text-2xl font-semibold text-stone-900 tracking-tight hover:text-stone-700 transition-colors">
              SIMSIMHAE
            </span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/food"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              음식 추천
            </Link>
            <Link
              to="/saju"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              AI 사주 풀이
            </Link>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors"
            aria-label="메뉴 토글"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 space-y-1 border-t border-stone-200/50">
            <Link
              to="/food"
              className="block px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              음식 추천
            </Link>
            <Link
              to="/saju"
              className="block px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              AI 사주 풀이
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
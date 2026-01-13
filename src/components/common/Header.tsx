'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Premium minimal header component
 * - Refined typography and spacing
 * - Editorial aesthetic
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200/50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <span className="font-serif text-2xl font-semibold text-stone-900 tracking-tight hover:text-stone-700 transition-colors">
              Simsimhae
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="/fortune"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Personal Insight
            </a>
            <a
              href="/meals"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Meals
            </a>
            <a
              href="/snacks"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Snacks
            </a>
            <a
              href="/explore"
              className="px-5 py-2 text-sm font-medium text-white bg-stone-800 hover:bg-stone-700 rounded-full transition-all"
            >
              Explore
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 space-y-1 border-t border-stone-200/50">
            <a
              href="/fortune"
              className="block px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors"
            >
              Personal Insight
            </a>
            <a
              href="/meals"
              className="block px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors"
            >
              Meals
            </a>
            <a
              href="/snacks"
              className="block px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors"
            >
              Snacks
            </a>
            <a
              href="/explore"
              className="block px-4 py-3 text-sm font-medium text-white bg-stone-800 hover:bg-stone-700 rounded-full transition-colors mt-4"
            >
              Explore
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

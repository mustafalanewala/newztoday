"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { cn } from "@/lib/utils";
import { fetcher } from "@/lib/fetcher";
import { getCategories, slugifyCategory } from "@/lib/news-utils";
import type { NewsItem } from "@/lib/types";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export function SiteHeader() {
  const { data } = useSWR<NewsItem[]>("/api/news", fetcher);
  const categories = getCategories(data || []);
  const mainCategories = categories.slice(0, 3);
  const moreCategories = categories.slice(3);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80 dark:border-border/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left side: Hamburger + Logo */}
        <div className="flex items-center">
          {/* Hamburger Menu - Always visible */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 mr-4"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 transition-transform hover:scale-105"
          >
            <Image
              src="/logo.png"
              alt="NewzToday"
              width={200}
              height={50}
              className="h-8 w-auto md:h-10 lg:h-12"
            />
            <span className="sr-only">Go to homepage</span>
          </Link>
        </div>

        {/* Right side: Desktop Categories and Sections */}
        <nav className="hidden md:flex items-center gap-2">
          <Link
            href="/gallery"
            className={cn(
              "rounded-lg px-4 py-2 text-base font-medium transition-all duration-200",
              "text-foreground hover:bg-theme-muted hover:text-theme"
            )}
          >
            Gallery
          </Link>
          <Link
            href="/videos"
            className={cn(
              "rounded-lg px-4 py-2 text-base font-medium transition-all duration-200",
              "text-foreground hover:bg-theme-muted hover:text-theme"
            )}
          >
            Videos
          </Link>
          <Link
            href="/blog"
            className={cn(
              "rounded-lg px-4 py-2 text-base font-medium transition-all duration-200",
              "text-foreground hover:bg-theme-muted hover:text-theme"
            )}
          >
            Blog
          </Link>

          {mainCategories.map((c) => (
            <Link
              key={c}
              href={`/category/${slugifyCategory(c)}`}
              className={cn(
                "rounded-lg px-4 py-2 text-base font-medium transition-all duration-200",
                "text-foreground hover:bg-theme-muted hover:text-theme"
              )}
            >
              {c}
            </Link>
          ))}

          {moreCategories.length > 0 && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "rounded-lg px-4 py-2 text-base font-medium transition-all duration-200 flex items-center gap-1",
                  "text-foreground hover:bg-theme-muted hover:text-theme"
                )}
              >
                More <ChevronDown size={16} />
              </button>
              {isOpen && (
                <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 border border-border rounded-lg shadow-lg z-50 min-w-[300px] p-2">
                  <div className="grid grid-cols-2 gap-2">
                    {moreCategories.map((c) => (
                      <Link
                        key={c}
                        href={`/category/${slugifyCategory(c)}`}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm font-medium hover:bg-theme-muted hover:text-theme rounded"
                      >
                        {c}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>

      {/* Hamburger Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border/30 bg-white dark:bg-gray-900">
          <nav className="flex flex-col px-4 py-3 space-y-2 max-w-6xl mx-auto">
            {/* Show categories only on mobile */}
            <div className="md:hidden">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme block"
              >
                Home
              </Link>
              {categories.map((c) => (
                <Link
                  key={c}
                  href={`/category/${slugifyCategory(c)}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme block"
                >
                  {c}
                </Link>
              ))}
              <div className="border-t border-border/30 my-2"></div>
            </div>
            {/* Always show these menu items */}
            {/* Section pages */}
            <Link
              href="/gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme"
            >
              Gallery
            </Link>
            <Link
              href="/videos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme"
            >
              Videos
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme"
            >
              Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme"
            >
              Contact Us
            </Link>
            <Link
              href="/advertise"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme"
            >
              Advertise with Us
            </Link>
            <Link
              href="/privacy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-theme-muted hover:text-theme"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

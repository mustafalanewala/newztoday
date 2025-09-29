import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-theme/20 bg-gradient-to-r from-theme-muted via-white to-theme-muted dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="NewzToday"
                width={150}
                height={45}
                className="h-8 w-auto md:h-10"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Stay informed with the latest news from trusted sources. Our
              platform delivers breaking news, in-depth analysis, and
              comprehensive coverage across World, Politics, Business, Sports,
              and Technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">
              Categories
            </h4>
            <nav className="flex flex-col space-y-2">
              {["World", "Politics", "Business", "Sports", "Technology"].map(
                (category) => (
                  <Link
                    key={category}
                    href={`/category/${category.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-theme transition-colors duration-200"
                  >
                    {category}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 dark:from-pink-900/20 dark:to-purple-900/20 dark:hover:from-pink-900/40 dark:hover:to-purple-900/40 text-pink-600 dark:text-pink-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors duration-200"
                aria-label="Twitter/X"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-theme/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} NewzToday — All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Stay informed with the latest news
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

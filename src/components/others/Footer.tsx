import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import FadeInOnView from "./animation/FadeIn";

export default function Footer() {
  return (
    <FadeInOnView>
      <footer className="max-w-6xl mx-auto p-4 py-15">
        <div className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-center">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-t from-white to-gray-300/80 bg-clip-text text-xl sm:text-3xl ml-2 font-bold leading-none text-transparent">
            Veevity
          </span>

          <div className="flex justify-around sm:justify-between min-w-xs">

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm px-4">Products</h3>
              <div className="space-y-3">
                <Link href="#" className="block text-gray-400 text-xs transition-all duration-200 px-4 py-2 hover:text-white hover:border-l-4 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-transparent rounded-lg">
                  Product 1
                </Link>
                <Link href="#" className="block text-gray-400 text-xs transition-all duration-200 px-4 py-2 hover:text-white hover:border-l-4 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-transparent rounded-lg">
                  Product 2
                </Link>
                <Link href="#" className="block text-gray-400 text-xs transition-all duration-200 px-4 py-2 hover:text-white hover:border-l-4 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-transparent rounded-lg">
                  Product 3
                </Link>
                <Link href="#" className="block text-gray-400 text-xs transition-all duration-200 px-4 py-2 hover:text-white hover:border-l-4 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-transparent rounded-lg">
                  Product 4
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm px-4">Company</h3>
              <div className="space-y-3">
                <Link href="#" className="block text-gray-400 text-xs transition-all duration-200 px-4 py-2 hover:text-white hover:border-l-4 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-transparent rounded-lg">
                  About Us
                </Link>
                <Link href="#" className="block text-gray-400 text-xs transition-all duration-200 px-4 py-2 hover:text-white hover:border-l-4 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-transparent rounded-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

        </div>
        <div className="p-4">
          <span className="block mx-auto text-center mb-5 bg-gradient-to-t opacity-30 from-white to-gray-500/10 bg-clip-text text-4xl sm:text-6xl md:text-8xl font-bold leading-none text-transparent">
            Build your dream.
          </span>
          <p className="text-xs text-center mb-2">
            Copyright &copy; {new Date().getFullYear()} All rights reserved by Veevity
          </p>
          <div className="flex justify-center gap-2 md:gap-4 text-lg md:text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-muted-foreground transition-colors duration-200" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-muted-foreground transition-colors duration-200" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-muted-foreground transition-colors duration-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-muted-foreground transition-colors duration-200" />
            </a>
          </div>
        </div>
      </footer>
    </FadeInOnView>
  )
};
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-center">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-t from-white to-gray-300/80 bg-clip-text text-xl sm:text-3xl ml-2 font-bold leading-none text-transparent">
          Veevity
        </span>

        <div className="flex justify-between min-w-xs">

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Products</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Product 1
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Product 2
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Product 3
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Product 4
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                About Us
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>
      <div className="p-4">
        <span className="block mx-auto text-center mb-5 bg-gradient-to-t opacity-10 from-white to-gray-500/10 bg-clip-text text-4xl sm:text-6xl md:text-8xl font-bold leading-none text-transparent">
          Build your dream.
        </span>
        <p className="text-xs text-center">Copyright &copy; {new Date().getFullYear()} All rights reserved by Veevity</p>
      </div>
    </footer>
  )
};
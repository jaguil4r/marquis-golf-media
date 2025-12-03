import Link from 'next/link';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tighter text-white mb-4 block">
              MARQUIS<span className="text-green-500">GOLF</span>
            </span>
            <p className="text-gray-400 max-w-sm">
              Capturing the golfing journey with modern tech and a personal touch. 
              Father & Son media production.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-400 hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-green-500 transition-colors">About</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-green-500 transition-colors">Services</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-green-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Marquis Golf Media. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Designed for the <span className="text-green-500">Modern Golfer</span>
          </p>
        </div>
      </div>
    </footer>
  );
}


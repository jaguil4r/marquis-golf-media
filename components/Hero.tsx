'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-10" />
        {/* Placeholder for actual video or high-res image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6 backdrop-blur-sm">
            Modern Golf Media
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            THE GOLFING <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">JOURNEY</span>
            <br />
            IS IN PLAY
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Experience golf through a new lens. High-end content creation for the modern golfer.
            Capturing the game, the lifestyle, and the connection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all flex items-center gap-2 backdrop-blur-sm">
              <Play className="w-4 h-4 fill-current" />
              Watch Reel
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Tech Overlay Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] z-0 pointer-events-none" />
    </section>
  );
}


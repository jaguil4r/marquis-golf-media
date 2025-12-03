'use client';

import { motion } from 'framer-motion';
import { Users, Camera, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              More Than Just <span className="text-green-500">Content</span>.
              <br />
              It's a Family Legacy.
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Marquis Golf Media was born from a simple passion: the love of the game and the bond between a father and son.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We aren't just filming swings; we are documenting the journey. With "Marquee" leading the vision and his son behind the lens, we bring a unique, personal, and modern perspective to golf media. We combine the newest tech with the timeless traditions of the sport.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Father & Son Team</h3>
                  <p className="text-sm text-gray-400">A dynamic duo bringing two generations of perspective.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Modern Tech</h3>
                  <p className="text-sm text-gray-400">Utilizing the latest equipment for cinematic quality.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative z-10 border border-white/10 bg-zinc-900">
               {/* Placeholder for Father/Son image */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535131749006-b7f58c9f0363?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-80 hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               <div className="absolute bottom-8 left-8">
                 <p className="text-white text-xl font-bold">The Team</p>
                 <p className="text-green-400">Marquee & Son</p>
               </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


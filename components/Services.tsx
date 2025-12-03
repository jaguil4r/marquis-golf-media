'use client';

import { motion } from 'framer-motion';
import { Video, Share2, Edit, MonitorPlay } from 'lucide-react';

const services = [
  {
    title: 'On-Course Videography',
    description: 'Full round coverage, highlight reels, and swing analysis captured with professional 4K cameras and drones.',
    icon: Video,
  },
  {
    title: 'Social Media Content',
    description: 'Short-form content optimized for Instagram, TikTok, and YouTube Shorts to grow your personal brand.',
    icon: Share2,
  },
  {
    title: 'Professional Editing',
    description: 'Cinematic editing, color grading, and sound design that turns raw footage into a compelling story.',
    icon: Edit,
  },
  {
    title: 'Brand Storytelling',
    description: 'We help golf brands and influencers tell their unique stories through high-quality visual media.',
    icon: MonitorPlay,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Elevate Your <span className="text-green-500">Game</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Premium content creation services tailored for the golf industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-green-500/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


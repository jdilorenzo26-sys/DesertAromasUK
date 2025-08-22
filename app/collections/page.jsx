"use client";

import { motion } from "framer-motion";
const COLLECTIONS = [
  {
    id: "oud",
    name: "Oud Collection",
    description: "Deep, woody, and luxurious oud fragrances.",
    image: "/oud-collection.jpg",
  },
  {
    id: "amber",
    name: "Amber Collection",
    description: "Warm, resinous, and golden amber notes.",
    image: "/amber-collection.jpg",
  },
  {
    id: "floral",
    name: "Floral Collection",
    description: "Elegant and timeless floral fragrances.",
    image: "/floral-collection.jpg",
  },
];

import Link from "next/link";
import { motion } from "framer-motion";

export default function Collections() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {COLLECTIONS.map((col) => (
          <motion.div 
            key={col.id}
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg"
          >
            <img src={col.image} alt={col.name} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{col.name}</h2>
              <p className="text-gray-400 mt-2">{col.description}</p>
              <Link 
                href={`/collections/${col.id}`} 
                className="inline-block mt-4 text-gold font-semibold hover:underline"
              >
                Explore →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

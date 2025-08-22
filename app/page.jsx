'use client';

import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const PRODUCTS = [
  {
    id: "oud-majestic",
    name: "Oud Majestic EDP 50ml",
    price: 39.99,
    notes: ["Oud", "Saffron", "Amber"],
    image: "/placeholder-oud.jpg",
    tiktokUrl: "#",
    badge: "Bestseller",
    rating: 4.8,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-6xl font-bold text-gold drop-shadow-lg"
        >
          Desert Aromas
        </motion.h1>
        <p className="mt-4 text-lg text-gray-200">Luxury Arabic Perfumes</p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg p-4 flex flex-col"
            >
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
              <div className="flex-1 flex flex-col justify-between mt-4">
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{product.notes.join(", ")}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">£{product.price}</span>
                  <a href={product.tiktokUrl} target="_blank" rel="noopener noreferrer" className="bg-gold text-black px-4 py-2 rounded-xl flex items-center gap-2">
                    <ShoppingCart size={18}/> Buy
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

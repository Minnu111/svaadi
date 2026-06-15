import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "Ananya R.",
      text: "The most authentic South Indian dining experience I've had outside my grandmother's home. The Kanchipuram Idli is an absolute revelation.",
      rating: 5
    },
    {
      name: "Vikram M.",
      text: "స్వాదిష్ట completely redefines traditional flavors. The ambiance is cinematic, and the Chettinad Curry has the perfect balance of heat and depth.",
      rating: 5
    },
    {
      name: "Priya S.",
      text: "From the moment you walk in, the aroma transports you. The Royal Thali is a masterclass in culinary balance. Every dish was flawless.",
      rating: 5
    },
    {
      name: "Rohan D.",
      text: "Impeccable service, stunning interior, and the Filter Coffee Mousse is the best dessert I've had all year. A true luxury experience.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-card border-t border-border/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-primary" />
            <span className="tracking-[0.2em] uppercase text-sm text-primary font-medium">Guest Experiences</span>
            <div className="w-8 h-[1px] bg-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl text-card-foreground mt-4"
          >
            Words of Appreciation
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: "1000px" }}>
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, rotateY: 30, scale: 0.9, z: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
              className="p-8 border border-border/50 bg-background/50 relative shadow-[0_10px_30px_rgba(0,0,0,0.05)] transform-style-3d hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(201,168,76,0.1)] transition-all duration-500"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <p className="font-serif text-card-foreground tracking-widest uppercase text-xs">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

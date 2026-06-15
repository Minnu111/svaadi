import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { Hero3D } from "./Hero3D";

export function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden perspective-[1000px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Cinematic South Indian feast"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* 3D Particle Overlay */}
      <Hero3D />

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center mt-20 transform-style-3d">
        <motion.p
          initial={{ opacity: 0, z: -50, rotateX: 20 }}
          animate={{ opacity: 1, z: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-telugu text-sm md:text-base tracking-[0.2em] mb-6 text-primary font-medium"
        >
          సంప్రదాయ రుచులు
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, z: 100, rotateX: -20 }}
          animate={{ opacity: 1, z: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white max-w-4xl leading-tight mb-8 drop-shadow-2xl"
        >
          Experience Authentic <span className="text-primary italic">South Indian</span> Flavours
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-4 flex-wrap justify-center"
        >
          <Button
            onClick={() => scrollTo("#reservation")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif tracking-widest uppercase rounded-none px-8 py-6 text-sm shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.6)] transition-all duration-300"
          >
            Reserve Table
          </Button>
          <Button
            onClick={() => scrollTo("#menu")}
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 font-serif tracking-widest uppercase rounded-none px-8 py-6 text-sm bg-transparent backdrop-blur-sm"
          >
            View Menu
          </Button>
        </motion.div>

        {/* Quick contact info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-12 text-white/80 text-xs tracking-widest uppercase"
        >
          <a
            href="tel:09705799099"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone size={13} />
            09705799099
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={13} className="text-primary" />
            Kanuru, Vijayawada, Andhra Pradesh
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}

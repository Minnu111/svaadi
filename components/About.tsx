import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={containerRef} id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Parallax Elements */}
      <motion.div style={{ y: y1, opacity }} className="absolute -left-20 top-20 text-[20vw] font-serif text-primary/5 pointer-events-none select-none z-0">
        S
      </motion.div>
      <motion.div style={{ y: y2, opacity }} className="absolute -right-10 bottom-20 text-[15vw] font-serif text-primary/5 pointer-events-none select-none z-0">
        R
      </motion.div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative perspective-[1000px]"
          >
            <div className="aspect-[3/4] relative z-10 w-[80%] ml-[10%] transform-style-3d hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(201,168,76,0.15)] transition-all duration-700">
              <img 
                src="/special-1.png" 
                alt="Traditional South Indian Thali" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            {/* Decorative border */}
            <motion.div style={{ y: y2 }} className="absolute top-8 -right-8 w-[80%] h-full border border-primary/30 z-0 hidden md:block" />
            <motion.div style={{ y: y1 }} className="absolute -bottom-8 -left-8 w-[80%] h-full border border-primary/10 z-0 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="tracking-[0.2em] uppercase text-sm text-primary font-medium">Our Story</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              A Legacy of <br/>
              <span className="italic text-muted-foreground">Culinary</span> Craft
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                స్వాదిష్ట was born from a simple reverence for the recipes that have graced our ancestral kitchens for generations. We do not reinvent South Indian cuisine; we elevate it, honoring the profound complexity of its spices and the meticulous patience required to balance them.
              </p>
              <p>
                From the slow-roasted aromas of our Chettinad spices to the crisp perfection of our dosas, every dish is treated as fine art. We invite you to experience the warmth of our heritage in a setting that breathes modern luxury.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
                <p className="font-serif text-4xl text-primary drop-shadow-sm">25+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Years of Heritage</p>
              </motion.div>
              <div className="w-[1px] h-12 bg-border" />
              <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
                <p className="font-serif text-4xl text-primary drop-shadow-sm">100%</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Authentic Recipes</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

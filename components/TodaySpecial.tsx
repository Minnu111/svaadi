import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function TodaySpecial() {
  return (
    <section id="specials" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Floating 3D Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-primary/5 to-transparent rounded-full blur-[80px] -z-10 mix-blend-screen animate-[float-orb_15s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9A84C]/10 via-[#C9A84C]/5 to-transparent rounded-full blur-[80px] -z-10 mix-blend-screen animate-[float-orb_20s_ease-in-out_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent rounded-full blur-[100px] -z-10 animate-[float-orb_25s_ease-in-out_infinite_1s]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-primary" />
            <span className="tracking-[0.2em] uppercase text-sm text-primary font-medium drop-shadow-sm">Chef's Selection</span>
            <div className="w-8 h-[1px] bg-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-foreground mb-6"
          >
            Today's Specials
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto perspective-[1200px]">
          {[
            {
              title: "స్వాదిష్ట Royal Thali",
              desc: "A grand feast of 15 authentic delicacies served on a banana leaf, featuring seasonal vegetables, premium meats, and our signature payasam.",
              img: "/special-1.png",
              price: "₹850"
            },
            {
              title: "Chettinad Fish Fry",
              desc: "Fresh catch of the day, marinated in fiery coastal spices and roasted to perfection. Served with tangy mint chutney and raw mango salad.",
              img: "/special-2.png",
              price: "₹720"
            }
          ].map((special, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, z: 20, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              className="group relative overflow-hidden flex flex-col bg-card/60 backdrop-blur-md border border-border/30 transform-style-3d transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={special.img} 
                  alt={special.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="p-8 border-t-0 relative bg-gradient-to-b from-transparent to-background/50">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-primary/70" />
                <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-primary/70" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-primary/70" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-primary/70" />
                
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-serif text-2xl text-card-foreground group-hover:text-primary transition-colors">
                    {special.title}
                  </h3>
                  <span className="font-serif text-xl text-primary drop-shadow-md">{special.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {special.desc}
                </p>
                <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground font-serif tracking-widest uppercase text-xs transition-all duration-300">
                  Order Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

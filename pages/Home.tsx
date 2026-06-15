import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { TodaySpecial } from "@/components/TodaySpecial";
import { Reservation } from "@/components/Reservation";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Home() {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      {/* Global Ambient Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary animate-[particle-up_10s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              boxShadow: "0 0 10px 2px rgba(201,168,76,0.3)"
            }}
          />
        ))}
      </div>

      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <div className={`min-h-screen bg-background font-sans ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100 transition-opacity duration-1000'} relative z-10`}>
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <TodaySpecial />
          <Menu />
          
          {/* Parallax separator */}
          <section className="h-[40vh] relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img 
                src="/interior-2.png" 
                alt="Atmosphere" 
                className="w-full h-full object-cover object-center" 
                style={{ transform: "scale(1.2)" }} 
              />
              <div className="absolute inset-0 bg-black/60 dark:bg-black/80 mix-blend-multiply" />
            </div>
            <h2 className="relative z-10 font-serif text-3xl md:text-5xl text-white tracking-[0.2em] uppercase text-center px-4 drop-shadow-2xl">
              A Symphony of Spices
            </h2>
          </section>

          <Reservation />
          <Reviews />
          
          {/* Gallery snippet inline */}
          <section id="gallery" className="py-24 bg-card relative perspective-[1500px]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-50 mix-blend-screen" />
            <div className="container mx-auto px-6 md:px-12 relative z-10">
              <div className="text-center mb-16">
                <span className="tracking-[0.2em] uppercase text-sm text-primary font-medium">Visual Journey</span>
                <h2 className="font-serif text-4xl text-card-foreground mt-4">Atmosphere & Craft</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 transform-style-3d">
                {['/interior-3.png', '/special-2.png', '/interior-1.png'].map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, z: -100, rotateX: 20 }}
                    whileInView={{ opacity: 1, z: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, rotateY: 5, z: 50, transition: { duration: 0.4 } }}
                    className={`overflow-hidden group ${i === 2 ? 'col-span-2 md:col-span-1' : ''} shadow-lg hover:shadow-2xl transition-all duration-500 rounded-sm relative`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                    <img 
                      src={img} 
                      alt="Gallery image" 
                      className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </main>

        <Contact />

        {/* WhatsApp FAB */}
        <a 
          href="https://wa.me/919705799099" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </>
  );
}

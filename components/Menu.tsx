import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuItems = {
  breakfast: [
    { name: "Ghee Roast Dosa", desc: "Crispy crepe roasted in clarified butter, served with three chutneys", price: "₹245" },
    { name: "Kanchipuram Idli", desc: "Steamed rice cakes tossed in fiery Chettinad spices and podi", price: "₹195" },
    { name: "Medu Vada", desc: "Crispy lentil doughnuts with crushed black pepper and curry leaves", price: "₹180" },
    { name: "Pongal", desc: "Comforting rice and lentil porridge tempered with cumin and ghee", price: "₹210" },
  ],
  meals: [
    { name: "స్వాదిష్ట Royal Thali", desc: "A grand feast of 15 authentic delicacies served on a banana leaf", price: "₹850" },
    { name: "Hyderabadi Dum Biryani", desc: "Aromatic basmati rice slow-cooked with tender meat and saffron", price: "₹650" },
    { name: "Chettinad Chicken Curry", desc: "Fiercely spiced chicken in a rich roasted coconut and pepper gravy", price: "₹520" },
    { name: "Malabar Fish Roast", desc: "Fresh catch marinated in coastal spices and wrapped in banana leaf", price: "₹720" },
  ],
  desserts: [
    { name: "Elaneer Payasam", desc: "Tender coconut pudding infused with cardamom and nuts", price: "₹280" },
    { name: "Mysore Pak", desc: "Rich, melt-in-mouth sweet made with generous amounts of pure ghee", price: "₹250" },
    { name: "Filter Coffee Mousse", desc: "Traditional degree coffee reimagined as a velvety dessert", price: "₹320" },
  ],
  beverages: [
    { name: "Degree Filter Coffee", desc: "Authentic Kumbakonam style coffee served in a brass dabarah", price: "₹150" },
    { name: "Spiced Neer Mor", desc: "Refreshing buttermilk churned with ginger, green chilies, and coriander", price: "₹120" },
    { name: "Nannari Sarbath", desc: "Cooling artisanal root extract beverage with a hint of lime", price: "₹140" },
  ]
};

function TiltCard({ item, idx }: { item: any, idx: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20, z: -50 }}
      whileInView={{ opacity: 1, x: 0, z: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col border border-border/20 p-6 hover:border-primary/50 transition-colors bg-card/40 backdrop-blur-sm relative hover:z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: "translateZ(-10px)" }} />
      <div style={{ transform: "translateZ(30px)" }}>
        <div className="flex justify-between items-baseline mb-3">
          <h3 className="font-serif text-xl text-card-foreground group-hover:text-primary transition-colors drop-shadow-sm">{item.name}</h3>
          <span className="font-serif text-lg text-primary drop-shadow-sm">{item.price}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed pr-8">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-background relative overflow-hidden" style={{ perspective: "1200px" }}>
      {/* Background Depth Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-50 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-primary" />
            <span className="tracking-[0.2em] uppercase text-sm text-primary font-medium">Culinary Repertoire</span>
            <div className="w-8 h-[1px] bg-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-foreground mb-6"
          >
            Signature Offerings
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Tabs defaultValue="meals" className="w-full max-w-5xl mx-auto">
            <TabsList className="w-full flex flex-wrap justify-center bg-transparent border-b border-border/30 rounded-none h-auto p-0 mb-12 relative z-20">
              {Object.keys(menuItems).map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary text-muted-foreground uppercase tracking-widest text-xs md:text-sm px-6 py-4 transition-all"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(menuItems).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0 outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" style={{ transformStyle: "preserve-3d" }}>
                  {items.map((item, idx) => (
                    <TiltCard key={item.name} item={item} idx={idx} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Featured Images with 3D Depth */}
        <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1000px]">
          {['/food-dosa.png', '/food-idli.png', '/food-biryani.png', '/food-coffee.png'].map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, rotateY: 30, scale: 0.9, z: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, z: 50, transition: { duration: 0.4 } }}
              className="aspect-square overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 rounded-sm relative"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={src} 
                alt="Featured Dish" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

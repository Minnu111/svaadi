import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Background radial glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px]"
            />
          </div>

          <div className="relative z-10 text-center px-6">

            {/* Brand name — whole word reveal with shimmer */}
            <div className="relative overflow-hidden mb-2">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="font-telugu text-6xl md:text-8xl lg:text-9xl text-primary tracking-wide leading-none drop-shadow-[0_0_30px_rgba(201,168,76,0.4)]"
              >
                స్వాదిష్ట
              </motion.h1>

              {/* Gold shimmer sweep */}
              <motion.div
                initial={{ x: "-110%" }}
                animate={{ x: "110%" }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 30%, rgba(201,168,76,0.55) 50%, transparent 70%)",
                }}
              />
            </div>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.0, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent w-64 md:w-80 mx-auto my-5 origin-center"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.9 }}
              className="font-telugu text-base md:text-lg tracking-[0.2em] text-muted-foreground"
            >
              సంప్రదాయ రుచులు
            </motion.p>
          </div>

          {/* Exit burst */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isVisible ? 0 : 2.5, opacity: isVisible ? 0 : 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[100vw] h-[100vw] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.15)_0%,transparent_70%)]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

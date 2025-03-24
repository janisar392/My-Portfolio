export const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
      viewport: { once: false, amount: 0.2 },
    },
    fadeInLeft: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.8, ease: "easeOut" },
      viewport: { once: false, amount: 0.2 },
    },
    fadeInRight: {
      initial: { x: 100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.8, ease: "easeOut" },
      viewport: { once: false, amount: 0.2 },
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.9, y: 20 },
      whileInView: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
      viewport: { once: false, amount: 0.2 },
    },
    fadeInLeft1: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.8, ease: "easeOut" },
      viewport: { once: false, amount: 0.2 },
    },
    fadeInRight1: {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.8, ease: "easeOut" },
      viewport: { once: false, amount: 0.2 },
    },
  };
  
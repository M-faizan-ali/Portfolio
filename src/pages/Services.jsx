import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import ServicesPageContent from '../components/ServicesPageContent';

const Services = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;

  const profileCardY = useTransform(scrollYProgress, [0, 0.8, 1], ['0%', '0%', '-40%']);
  const servicesContentY = useTransform(scrollYProgress, [0, 0.9, 1], ['0%', '0%', '-20%']);

  useEffect(() => {
    if (!isDesktop) {
      profileCardY.destroy();
      servicesContentY.destroy();
    }
  }, [isDesktop, profileCardY, servicesContentY]);

  return (
    <div>
      <Navbar />
      <div
        ref={containerRef}
        className="relative w-[90%] m-auto flex md:flex-row flex-col gap-8"
      >
        {/* Left Column (Sticky) */}
        <motion.div
          className="w-full md:w-[30%] sticky top-20 h-screen z-20 bg-white shadow-md"
          style={{ y: isDesktop ? profileCardY : 0 }}
        >
          <ProfileCard />
        </motion.div>

        {/* Right Column (Scrolls separately but transforms smoothly) */}
        <motion.div
          ref={contentRef}
          className="w-full md:w-[70%] md:pl-6 overflow-y-visible"
          style={{ y: isDesktop ? servicesContentY : 0 }}
        >
          <ServicesPageContent />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

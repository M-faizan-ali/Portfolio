import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import HirringSection from '../components/HirringSection';
import Skills from '../components/Skills';
import Testimonial from '../components/Testimonial';
import Awards from '../components/Awards';

const ScrollChain = ({ children, onChainEnd, isChainActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const isAtBottom =
        container.scrollHeight - container.scrollTop === container.clientHeight;

      if (isAtBottom && onChainEnd) {
        onChainEnd();
      }
    };

    if (isChainActive) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [onChainEnd, isChainActive]);

  return (
    <div ref={containerRef} style={{ overflowY: 'auto', scrollBehavior: 'smooth' }}>
      {children}
    </div>
  );
};

export default function AboutUs() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [isChainActive, setIsChainActive] = useState(true);
  const profileCardY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, '-50%'],
    { clamp: false } // Important
  );

  const clampedProfileCardY = useTransform(profileCardY, (value) => {
    return Math.max(Math.min(value, 0), '-50%'); // Clamp between 0 and -50%
  });

  const contentX = useTransform(scrollYProgress, [0, 0, 1, 1], ['0%', '0%', '0%', '0%']);

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;

  const handleChainEnd = () => {
    setIsChainActive(false);
  };

  useEffect(() => {
    if (!isDesktop) {
      profileCardY.destroy();
    }
    if (scrollYProgress.get() < 1) {
      setIsChainActive(true);
    }
  }, [isDesktop, scrollYProgress, profileCardY]);

  return (
    <div>
      <Navbar style={{ zIndex: 100 }} />
      <div className="w-[90%] m-auto" ref={containerRef} style={{ perspective: '1000px' }}>
        <div className="flex md:flex-row flex-col gap-[15px] w-full">
          <motion.div
            className={`w-full md:w-[30%] bg-gray-200 rounded-xl ${isChainActive ? 'sticky top-0 h-screen' : ''}`}
            style={{ y: isDesktop ? clampedProfileCardY : 0 }} // Use clampedProfileCardY
          >
            <ProfileCard />
          </motion.div>
          <motion.div
            className="w-full md:w-[70%] rounded-xl bg-white "
            ref={contentRef}
            style={{ x: isDesktop ? contentX : 0 }}
          >
            <ScrollChain onChainEnd={handleChainEnd} isChainActive={isChainActive}>
              <HirringSection />
              <Skills />
              <Testimonial />
              <Awards />
            </ScrollChain>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
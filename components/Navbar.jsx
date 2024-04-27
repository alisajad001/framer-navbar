'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  return (
    <motion.nav
      className="navbar"
      initial="closed"
      animate="open"
      exit="closed"
      variants={variants}
    >
      <ul>
        {navItems.map((item, index) => (
          <motion.li key={index} variants={variants}>
            <a href={item.url}>{item.title}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

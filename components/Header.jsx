'use client';

import { useState } from 'react';
import Navbar from './Navbar';

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="button" onClick={() => setIsActive(!isActive)}>
        <div className={`burger ${isActive ? 'active' : ''}`}></div>
      </div>

      {/* Navbar */}
      {isActive ? <Navbar /> : ''}
    </>
  );
}

export default Header;

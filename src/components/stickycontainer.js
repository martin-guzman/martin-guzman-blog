/*  Stickey Container Component
    Container for sticky Table of Contents components. 
    CSS is defined in root-wrapper.js located in root directory.
*/
// Import React and Gatsby Elements
import React, { useEffect, useRef, useState } from 'react'

const StickyContainer = ({ children }) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
      { children }
    </div>
  )
}

export default StickyContainer
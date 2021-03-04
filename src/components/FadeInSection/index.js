import React, { useEffect, useState } from 'react';
import "./style.css";

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(true);
    const domRef = React.useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      const ref = domRef.current
      return () => observer.unobserve(ref);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  export default FadeInSection;
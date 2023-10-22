import React, { useRef } from 'react';

function FeedButton({ label, icon }) {
  const feedRef = useRef();

  const scrollToTop = () => {
    if (feedRef.current) {
      feedRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToTop}>
      <span className="icon">{icon}</span>
      {label}
    </button>
  );
}

export default FeedButton;
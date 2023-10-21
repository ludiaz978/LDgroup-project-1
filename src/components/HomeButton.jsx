import React, { useRef } from 'react';

function HomeButton() {
    const feedRef = useRef();

    const scrollToTop = () => {
        if (feedRef.current) {
        feedRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={scrollToTop}>Home</button>
    );
}

export default HomeButton;
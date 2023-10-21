import React from 'react';
import HomeButton from './HomeButton';
import '../components/Header.css';

function Header() {
  return (
    <header>
      <h1>PetBook</h1>
      <nav>
        <HomeButton />
        <button>Search</button>
        <button>Post</button>
      </nav>
    </header>
  );
}

export default Header;
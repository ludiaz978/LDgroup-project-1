import React from 'react';
import HomeButton from './HomeButton';
import '../components/Header.css';
import SearchButton from '../components/SearchButton';

function Header() {
  return (
    <header>
      <h1>PetBook</h1>
      <nav>
        <HomeButton />
        <SearchButton />
      </nav>
    </header>
  );
}

export default Header;
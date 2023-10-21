import React from 'react';
import Sidebar from './Sidebar';


function Header() {
  return (
    <header>
      <h1>Paw-Files</h1>
      <nav>
        <HomeButton />
        <SearchButton />
      </nav>
    </header>
  );
}

export default Header;
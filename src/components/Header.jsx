import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  return (
    <div>
      <ul className="flex space-x-5 text-white md:w-1/2 items-center
       justify-center md:space-x-40 bg-neutral-950 h-10 mb-2
       text-xl fixed top-0 w-full"
      >
        <Link to="#home">
          <li>Home</li>
        </Link>
        <Link to="#projects">
          <li>Projetos</li>
        </Link>
        <Link to="#contact">
          <li>Contato</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;

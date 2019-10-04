import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className='nav'>
        <li className='nav__item'>
          <Link className='nav__link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='/about'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

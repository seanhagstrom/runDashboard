import React from "react";

const Navbar = () => {
  return (
    <header>
      <p>Navbar Logo Here</p>
      <nav>
        <div className='nav-item'>
          <a href='#'>Home</a>
        </div>
        <div className='nav-item'>
          <a href='#'>About</a>
        </div>
        <div className='nav-item'>
          <a href='#'>Login</a>
        </div>
        <div className='nav-item'>
          <a href='#'>Sign Up</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

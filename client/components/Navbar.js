import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowUndoSharp } from 'react-icons/io5';
// https://react-icons.github.io/react-icons

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <div className='nav-item'>
          <IoArrowUndoSharp onClick={() => navigate(-1)} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

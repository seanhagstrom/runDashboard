import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoArrowUndoSharp } from 'react-icons/io5';
// https://react-icons.github.io/react-icons
import { logout } from '../store/auth';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <div className='nav-item'>
          <IoArrowUndoSharp onClick={() => navigate(-1)} />
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

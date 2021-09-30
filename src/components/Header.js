import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import './Header.css';

const Header = () => {
  // Hooks
  // ---state
  const { state, dispatch } = useContext(UserContext);

  //---side effects
  useEffect(() => {
    if (localStorage.getItem('user')) {
      console.log('user founded');

      dispatch({ type: 'LOGIN', payload: localStorage.getItem('user') });
    } else {
      console.log('user not found');
    }
  }, [dispatch]);
  return (
    <header>
      <div className='container'>
        <div>Car Adverts</div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {state.user ? (
              <li>
                <Link to='/my-account'>My Account</Link>
              </li>
            ) : (
              <li>
                <Link to='/login'>Login/Sign Up</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

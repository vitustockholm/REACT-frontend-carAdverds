import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        {/* <div className='logo'>Car Adverts</div> */}
        <nav>
          <ul className='listas'>
            <li>
              <a href='/'>&copy; Car DealerShop</a>
            </li>
            <li>
              <a href='/'>
                {' '}
                {new Date().toLocaleDateString('fr-CA', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </a>
            </li>

            <li>
              <a href='/'>&reg; All rights reserved Vytautas Bernatavicius</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

import "../styles/navigationDesktop.scss";
import { useState } from 'react'

const NavigationDesktop = ({ pages }) => {
  return (
      <nav className="desktop-nav">
        <ul className="pages">
          {pages.map((page) => (
            <li className="pages__li" key={page}>
              <a className="pages__a">{page}</a>
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default NavigationDesktop;
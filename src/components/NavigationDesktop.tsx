import "../styles/navigationDesktop.css";
import { useState } from 'react'

const NavigationDesktop = ({ pages }) => {
  return (
      <nav className="desktop-nav">
        <ul className="pages">
          {pages.map((page) => (
            <li key={page}>
              <a>{page}</a>
            </li>
          ))}
        </ul>
        <ul className="icons">
          <li>
            <a>Es</a>
          </li>
          <li>
            <a>CV</a>
          </li>
        </ul>
      </nav>
  );
};

export default NavigationDesktop;
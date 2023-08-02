import React from "react";

const Nav = ({ pages }) => {
  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li>{page}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

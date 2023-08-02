import React from "react";

const Nav = ({ pages }) => {
  return (
    <nav>
      <ul className="flex flex-row">
        {pages.map((page) => (
          <li>{page}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

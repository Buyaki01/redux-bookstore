import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navContent">
      <h1 className="logo"> Bookstore CMS </h1>
      <ul className="navBarLinks">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className="listItem" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <FaUserCircle className="userIcon" />

    </nav>

  );
};
export default Navbar;

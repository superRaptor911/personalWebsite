/* eslint-disable react/prop-types */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { rootStyle, containerStyle, linkStyle, linkActiveStyle } from './../styles/header.module.css';

const routes = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Sites',
    path: '/sites'
  }
];

const Header = ({ curPage }) => {
  const getLinkStyle = (name) => {
    console.log(curPage + '|' + name);
    return name === curPage ? linkActiveStyle : linkStyle;
  };

  return (
    <div className={rootStyle} >
      <div className={containerStyle}>
        {
          routes.map((item, id) => (
            <Link key={id} className={getLinkStyle(item.name)} to={item.path}>
              {item.name}
            </Link>
          )
          )
        }
      </div>
    </div>
  );
};

Header.prototype = {
  curPage: PropTypes.string
};

export default Header;

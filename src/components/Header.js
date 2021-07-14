/* eslint-disable react/prop-types */
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {
  rootStyle,
  containerStyle,
  linkStyle,
  linkActiveStyle,
  containerStyleMobile,
} from './../styles/header.module.css';
import {getDeviceDimention} from './Utility';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Posts',
    path: '/posts',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Links',
    path: '/links',
  },
];

const mobileHeader = (isVisible, getLinkStyle) => {
  if (isVisible) {
    return (
      <div className={rootStyle}>
        <div className={containerStyleMobile}>
          {routes.map((item, id) => (
            <Link key={id} className={getLinkStyle(item.name)} to={item.path}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

const desktopHeader = getLinkStyle => {
  return (
    <div className={rootStyle}>
      <div className={containerStyle}>
        {routes.map((item, id) => (
          <Link key={id} className={getLinkStyle(item.name)} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Header = ({curPage}) => {
  const getLinkStyle = name => {
    return name === curPage ? linkActiveStyle : linkStyle;
  };

  const [header, setHeader] = useState(desktopHeader(getLinkStyle));

  useEffect(() => {
    const dimention = getDeviceDimention();
    if (dimention.width < 600) {
      setHeader(mobileHeader(true, getLinkStyle));
    }
  }, []);

  return header;
};

Header.prototype = {
  curPage: PropTypes.string,
};

export default Header;

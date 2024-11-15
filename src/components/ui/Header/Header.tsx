import React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header__title" role="heading" aria-level={1}>
        {title}
      </h1>
    </header>
  );
};

export default Header;

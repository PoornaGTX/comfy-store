import React from 'react';
import Logo from './Logo';
import LinksDropdown from './LinksDropdown';
import NavLinks from './NavLinks';
import ModeToggle from './ModeToggle';
import CartButton from './CartButton';

const NavBar = () => {
  return (
    <nav className="bg-muted py-4">
      <div className="align-element flex justify-between items-center">
        <Logo />
        <LinksDropdown />
        <NavLinks />

        <div className="flex justify-center items-center gap-x-4">
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

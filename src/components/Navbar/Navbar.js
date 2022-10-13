import React from 'react'
import { Link } from 'gatsby'

import { MENU_ITEMS } from './Navbar.config';
import { getCurrentBreakpoint } from '../../utils/ScreenUtils';

export default function Navbar() {
  const isSmallScreen = getCurrentBreakpoint() === 'sm';
  let navbarMenu = isSmallScreen ? MENU_ITEMS.reverse() : MENU_ITEMS;
  
  React.useEffect(() => {
    navbarMenu = isSmallScreen ? MENU_ITEMS.reverse() : MENU_ITEMS;
  })
  
  const renderSocialMedia = () => (
    <div
      className="flex font-inter self-center py-2 bg-slate-400"
    >
      Social Media
    </div>
  );
  
  const renderMenu = ({ className, path, text }) => (
    <div key={path} className={className}>
      <Link to={path}>{text}</Link>
    </div>
  )

  return (
    <nav className="flex flex-col md:flex-row text-slate-800 justify-between align-center py-6 px-8 border-solid border-b-2 border-slate 100">
      {navbarMenu.map(renderMenu)}
      {renderSocialMedia()}
    </nav>
  )
}

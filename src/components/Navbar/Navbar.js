import React from 'react'
import { Link } from 'gatsby'

import { MENU_ITEMS } from './Navbar.config';
import InstagramIcon from '../../assets/svgIcons/InstagramIcon.component'

export default function Navbar() {
  const renderSocialMedia = () => (
    <div
      className="flex gap-2 justify-center align-center self-center py-2 mr-8 w-40"
    >
      <InstagramIcon />
    </div>
  );
  
  const renderMenu = ({ className, path, text }) => (
    <div key={path} className={className}>
      <Link to={path}>{text}</Link>
    </div>
  )

  return (
    <nav className="flex flex-col sm:flex-row
      text-slate-800
      w-full
      justify-between align-center
      py-6
      border-solid border-b-2 border-slate 100">
      {MENU_ITEMS.map(renderMenu)}
      {renderSocialMedia()}
    </nav>
  )
}

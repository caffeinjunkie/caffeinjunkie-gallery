import React from 'react'
import { Link } from 'gatsby'

import { MENU_ITEMS } from './Navbar.config';
import InstagramIcon from '../../assets/svgIcons/InstagramIcon.component'

export default function Navbar() {
  const renderSocialMedia = () => (
    <div
      className="flex gap-2 justify-center sm:justify-end align-center self-center py-2 mx-8 w-40"
    >
      <Link to="https://www.instagram.com/caffein.junkie/" target="_blank">
        <InstagramIcon />
      </Link>
    </div>
  );
  
  const renderMenu = ({ className, path, text, id }) => (
    <div key={id} className={className}>
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

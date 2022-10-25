import React from 'react'
import { Link } from 'gatsby'
import { Button, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import { MENU_ITEMS, DRAWER_ITEMS } from './Navbar.config';
import InstagramIcon from '../../assets/svgIcons/InstagramIcon.component'

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  
  const renderSocialMedia = () => (
    <div
      className="hidden sm:flex gap-2 justify-center sm:justify-end align-center self-center py-2 mx-8 w-40"
    >
      <a
        href="https://www.instagram.com/caffein.junkie/"
        target="_blank"
        rel="noreferrer"
        >
        <InstagramIcon />
      </a>
    </div>
  );
  
  const renderMenu = ({ className, path, text, id }) => (
    <div key={id} className={className}>
      <Link to={path}>{text}</Link>
    </div>
  )
  
  const renderMobileMenu = () => (
    <div className="flex sm:hidden justify-start align-center self-center ml-3 w-40">
      <MenuIcon className="text-slate-800 cursor-pointer" onClick={() => setIsDrawerOpen(true)} />
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="flex flex-col gap-1 mt-2">
          {DRAWER_ITEMS.map(({id, children}) => (
            <div
              key={id}
              className="py-3 px-4 rounded-md mx-1
              font-regular text-slate-800"
              onClick={() => setIsDrawerOpen(false)}
            >
              {children}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  )

  return (
    <nav className="flex flex-row
      text-slate-800
      w-full
      justify-between align-center
      py-2
      border-solid border-b-2 border-slate 100">
      {renderMobileMenu()}
      {MENU_ITEMS.map(renderMenu)}
      {renderSocialMedia()}
    </nav>
  )
}

import React from 'react';
import { Link } from 'gatsby'
import { Instagram, Info } from '@mui/icons-material';

import CaffeinJunkieIcon from '../../assets/svgIcons/CaffeinJunkieIcon'

export const MENU_ITEMS = [
  {
    id: 'about',
    text: 'About',
    className: 'links font-inter self-center py-2 mx-8 w-40 justify-center sm:justify-start hidden sm:flex hover:text-slate-500',
    path: '/about'
  },
  {
    id: 'home',
    text: <CaffeinJunkieIcon />,
    className: 'links flex self-center pb-1 font-coolvetica text-3xl w-full justify-end sm:justify-center mr-3 sm:pr-0',
    path: '/'
  }
];

export const DRAWER_ITEMS = [
  {
    id: 'about-drawer',
    children: <Link to='/about' className="flex flex-row items-center gap-2 pr-24">
      <Info />
      About
    </Link>
  },
  {
    id: 'ig-drawer',
    children: <a
      href="https://www.instagram.com/caffein.junkie/"
      target="_blank"
      rel="noreferrer"
      className="flex flex-row items-center gap-2 pr-24"
    >
      <Instagram />
      caffein.junkie
    </a>
  }
]

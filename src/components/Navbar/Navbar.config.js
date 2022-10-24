import React from 'react';

import CaffeinJunkieIcon from '../../assets/svgIcons/CaffeinJunkieIcon'

export const MENU_ITEMS = [
  {
    id: 'about',
    text: 'About',
    className: 'links font-inter self-center py-2 mx-8 w-40 justify-center sm:justify-start hidden sm:flex',
    path: '/about'
  },
  {
    id: 'home',
    text: <CaffeinJunkieIcon />,
    className: 'links flex self-center pb-1 font-coolvetica text-3xl w-full justify-center',
    path: '/'
  },
  {
    id: 'about-mobile',
    text: 'About',
    className: 'links font-inter self-center py-2 mx-8 w-40 justify-center sm:justify-start flex sm:hidden',
    path: '/about'
  },
];

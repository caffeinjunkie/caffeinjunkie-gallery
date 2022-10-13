import React from 'react'

import { Navbar } from '../Navbar'

export default function Layout({ children }) {
  return (
    <div className="layout bg-slate-50">
      <Navbar />
      <div className="content font-normal">
        {children}
      </div>
      <footer className="flex justify-center font-normal py-8 bg-slate-800 text-slate-50 bottom-0 right-0 left-0 width-100">
        <p>Copyright 2022 @caffein.junkie</p>
      </footer>
    </div>
  )
}

import React from 'react'

import { Navbar } from '../Navbar'

export default function Layout({ children }) {
  return (
    <div className="layout bg-slate-50">
      <Navbar />
      <div className="content">
        {children}
      </div>
      <footer>
        <p>Copyright 2022 @caffein.junkie</p>
      </footer>
    </div>
  )
}

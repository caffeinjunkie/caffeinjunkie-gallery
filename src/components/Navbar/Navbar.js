import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
      <div className="links text-blue-600 ">
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/">
          <div>
            <div style={{height: 32}} className="font-coolvetica text-3xl text-slate-800">
              caffeinjunkie
            </div>
          </div>
        </Link>
      </div>
      <div>
        Social Media
      </div>
    </nav>
  )
}

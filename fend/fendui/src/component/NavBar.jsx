import React from 'react'
import './NavBar.css'
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#dedede' }}>
  <div class="nav_container">
    <a class="navbar-brand" href="/">Home</a>
    <a class="nav-link" href = "/mydocs">My Documents</a>
  </div>
</nav>
  )
}

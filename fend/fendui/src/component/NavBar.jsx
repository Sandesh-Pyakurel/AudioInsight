import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#dedede' }}>
  <div class="nav_container">
        <Link to="/conversion" className="nav-link">Home</Link>
        <Link to="/mydocs" className="nav-link">My Documents</Link>
  </div>
</nav>
  )
}

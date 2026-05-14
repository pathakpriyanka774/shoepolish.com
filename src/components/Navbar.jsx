import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../assets/shoespolishLogo.png'

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    function onScroll(){ setScrolled(window.scrollY > 24) }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner navbar-shell">
        <div className="brand">
            <img src={logo} alt="ShoesPolish logo" className="logo" />
        </div>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#services">Support Pillars</a>
          <a href="#impact">Impact</a>
          <a href="#approach">Approach</a>
          <a className="signin-link" href="#community">Community</a>
        </nav>
        <div className="nav-actions">

          <button type="button" className="book-btn" onClick={(e)=>{e.preventDefault(); onOpenBooking && onOpenBooking()}}>Contribute →</button>
        </div>
      </div>
    </header>
  )
}

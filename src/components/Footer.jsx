import React from 'react'
import logo from '../assets/shoespolishLogo.png'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-copy">
              <p className="footer-eyebrow">Cobbler dignity with a community mission</p>
              <div className="footer-columns">
                <div className="footer-links">
                  <strong>Quick links</strong>
                  <a href="#services">Support Pillars</a>
                  <a href="#impact">Impact</a>
                  <a href="#community">Community</a>
                </div>

                <div className="footer-contact">
                  <strong>Contact</strong>
                  <p>hello@shoespolish.com</p>
                  <p>+91 120 454 3346</p>
                  <p className="muted">© {new Date().getFullYear()} ShoesPolish</p>
                </div>
              </div>
            </div>

            <div className="footer-brand">
              <img src={logo} alt="ShoesPolish" className="footer-logo" />
            </div>
          </div>
          <div className="footer-bottom">Cobbler support · hygiene · infrastructure · livelihood dignity</div>
        </div>
      </div>
    </footer>
  )
}

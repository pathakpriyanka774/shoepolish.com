import React, { useState, useEffect } from 'react'
import hero1 from "../assets/cobbler1.jpg"
import hero2 from "../assets/cobbler2.jpeg"
import hero3 from "../assets/cobbler3.jpeg"
import hero4 from "../assets/cobbler4.jpg"
import hero5 from "../assets/cobbler5.jpeg"
import hero6 from "../assets/cobbler6.jpg"
import hero7 from "../assets/hero7.webp"
import hero8 from "../assets/hero8.png"
import hero9 from "../assets/cobbler7.jpg"
import hero10 from "../assets/cobbler8.webp"
import hero11 from "../assets/cobbler9.png"




const heroImages = [hero1,hero8, hero9, hero10, hero11, hero3, hero4, hero5,hero6,hero7]

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
         
          <h1>
            Restore dignity for
            <span>cobbler families</span>
            through meaningful support.
          </h1>
          <p className="hero-description">
            Join an NGO-led initiative that helps cobblers build better workplaces, improve hygiene, access tools,
            and strengthen their livelihood with donations, partnerships, and community support.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={(e)=>{e.preventDefault(); onOpenBooking && onOpenBooking()}}>Contribute Now</button>
            <a className="btn btn-secondary" href="#impact">See the Impact</a>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-frame">
            <div className="hero-carousel">
              {heroImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Shoe care showcase ${index + 1}`}
                  className={`hero-carousel-slide ${index === currentSlide ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

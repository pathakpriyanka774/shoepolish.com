import React from 'react'
import img1 from '../assets/cobbler1.jpg'
import img2 from '../assets/cobbler2.jpeg'
import img3 from '../assets/cobbler3.jpeg'

const showcases = [
  {
    category: 'Work · Training',
    title: 'Skills Training Workshop',
    year: '2024',
    image: img1,
    caption: 'Cobblers learning safe, modern techniques to improve income.'
  },
  {
    category: 'Livelihood · Support',
    title: 'Starter Kits Distribution',
    year: '2025',
    image: img2,
    caption: 'Providing tools and clean workspaces to help start sustainable work.'
  },
  {
    category: 'Community · Dignity',
    title: 'Better Workspaces Initiative',
    year: '2025',
    image: img3,
    caption: 'Creating safe, dignified environments for cobblers to earn a living.'
  }
]

export default function Showcase() {
  return (
    <section id="showcase" className="showcase-section showcase-section--dark">
      <div className="container">
        <div className="showcase-intro">
          <p className="showcase-kicker">◆ SHOWCASE · 3D</p>
          <h2>The story we&apos;re building together.</h2>
          <p>
            A visual story of dignity, support, and the people behind the cobbler trade — built to invite
            contribution, awareness, and community action.
          </p>
        </div>

        <div className="showcase-grid">
          {showcases.map((item) => (
            <article className="showcase-card" key={item.title}>
              <div className="showcase-meta">
                <span>{item.category}</span>
                <span>Crafted {item.year}</span>
              </div>
              <div className="showcase-heading-row">
                <h3>{item.title}</h3>
                <span className="showcase-year">{item.year}</span>
              </div>
              <div className="showcase-image-wrap">
                <div className="showcase-image-label">HOVER · 3D</div>
                <img src={item.image} alt={item.title} />
                {item.caption && <p className="showcase-caption">{item.caption}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

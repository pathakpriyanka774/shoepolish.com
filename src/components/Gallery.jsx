import React from 'react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6a5ef1a1b69f7d8d9e1f6e7f2b2c7e69',
    alt: 'Polished leather shoe'
  },
  {
    src: 'https://images.unsplash.com/photo-1600180758890-9e7f4b4a8b4b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5f1d7a8c8b6a9b3a1c2f5d1a2b3c4d5e',
    alt: 'Shoe polish tin and brush'
  },
  {
    src: 'https://images.unsplash.com/photo-1541807084-5c52b6b3eab3?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=bd6e9c7c7b8b9a6f4e3d2c1b0a9f8e7d',
    alt: 'Craftsman working on shoe'
  }
]

export default function Gallery() {
  return (
    <section id="gallery" className="gallery container">
      <h2>Catalog & Articles</h2>
      <p className="muted">Photos and catalog highlights — polishing, brushes, and care tips.</p>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className="gallery-item">
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

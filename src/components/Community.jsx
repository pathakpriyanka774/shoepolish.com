import React from 'react'
import hero3 from '../assets/hero3.avif'
import hero4 from '../assets/hero4.avif'
import hero5 from '../assets/hero5.avif'

const communityStories = [
  {
    image: hero3,
    title: 'Cobbler Heritage',
    description: 'Preserving generations of shoe care knowledge while giving artisans the support they need to keep working.'
  },
  {
    image: hero4,
    title: 'Community Impact',
    description: 'Supporting cobbler families through better workspaces, hygiene support, and financial assistance.'
  },
  {
    image: hero5,
    title: 'Dignity & Pride',
    description: 'Every contribution helps artisans work with more dignity, safer conditions, and renewed pride in their craft.'
  }
]

export default function Community() {
  return (
    <section id="community" className="community-section">
      <div className="container">
        <div className="community-header-wrapper">
          <div className="community-header">
            <p className="community-eyebrow">Meet the Community</p>
            <h2 className="community-title">The Cobbler Support Community</h2>
            <div className="community-divider"></div>
            <p className="community-description">
              At the heart of ShoesPolish is a commitment to the people who keep shoe care alive.
              We invite supporters, families, and organizations to help improve their workplace, hygiene,
              and livelihood with practical support.
            </p>
          </div>
        </div>

        <div className="community-grid">
          {communityStories.map((story, index) => (
            <article className="community-card" key={index}>
              <div className="community-image">
                <img src={story.image} alt={story.title} />
                <div className="community-overlay">
                  <h3>{story.title}</h3>
                </div>
              </div>
              <div className="community-content">
                <p>{story.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="community-cta">
          <p>
            Every contribution helps create better conditions for cobblers and their families.
            Learn how your support can make a direct difference.
          </p>
        </div>
      </div>
    </section>
  )
}

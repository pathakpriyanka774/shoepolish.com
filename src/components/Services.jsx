import React from 'react'

const servicePillars = [
  {
    title: 'Infrastructure',
    text: 'Better workbenches, shade, storage, and practical workspace upgrades for daily use.'
  },
  {
    title: 'Hygiene',
    text: 'Clean water, sanitation, and safer surroundings that improve working conditions.'
  },
  {
    title: 'Tools',
    text: 'Essential equipment and materials that help cobblers work more efficiently and with pride.'
  },
  {
    title: 'Training',
    text: 'Skill building and practical support that helps strengthen livelihood opportunities.'
  },
  {
    title: 'Funding',
    text: 'Monetary contributions and CSR support that can directly improve cobbler work life.'
  }
]

export default function Services() {
  return (
    <section id="services" className="atelier-services">
      <div className="container">
        <div className="atelier-services-head">
          <div className="atelier-services-copy">
            <p className="section-eyebrow">◆ SUPPORT PILLARS</p>
            <h2>
              Practical help. <span>One mission.</span>
            </h2>
          </div>
          <p className="atelier-services-note">
            Every contribution is directed toward dignity, workplace support, and better livelihood conditions for cobblers.
          </p>
        </div>
        <div className="atelier-divider" aria-hidden="true" />
        <div className="service-grid service-grid--atelier">
          {servicePillars.map((item) => (
            <article className="service-atelier-card" key={item.title}>
              <p className="service-atelier-kicker">Support</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

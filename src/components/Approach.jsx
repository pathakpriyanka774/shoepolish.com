import React from 'react'

const approachSteps = [
  {
    number: 1,
    title: 'LIVELIHOOD SUPPORT'
  },
  {
    number: 2,
    title: 'WORKPLACE IMPROVEMENT'
  },
  {
    number: 3,
    title: 'HYGIENE & SAFETY'
  },
  {
    number: 4,
    title: 'TOOLS & MATERIALS'
  },
  {
    number: 5,
    title: 'DONOR & CSR PARTNERSHIPS'
  }
]

export default function Approach() {
  return (
    <section id="approach" className="approach-section">
      <div className="container">
        <div className="approach-layout">
          <div className="approach-content">
            <h2 className="approach-title">How We Support Cobblers</h2>
            <div className="approach-steps">
              {approachSteps.map((step) => (
                <div className="approach-step" key={step.number}>
                  <div className="step-number">{step.number}</div>
                  <p className="step-title">{step.title}</p>
                </div>
              ))}
            </div>
            <p className="approach-description">
              An integrated model focused on better workplaces, hygiene, tools, dignity, and long-term support for cobbler families.
            </p>
          </div>
          <div className="approach-image">
            <img src="/src/assets/hero1.avif" alt="Shoe-making workshop" />
          </div>
        </div>
      </div>
    </section>
  )
}

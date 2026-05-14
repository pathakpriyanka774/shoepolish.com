import React from 'react'
import cobbler1 from '../assets/cobbler1.jpg'

const impactPoints = [
  'Creates better livelihoods by channeling donations and partnerships into cobbler support.',
  'Improves work conditions through safer, cleaner, and more dignified workplaces.',
  'Supports hygiene, tools, and infrastructure that help artisans work with confidence.',
  'Builds a clear NGO model for individuals, families, and CSR partners who want to contribute.',
  'Strengthens community pride by preserving the craft and supporting the people behind it.',
  'Turns goodwill into measurable social impact for cobbler families and local livelihoods.'
]

const visionPoints = [
  'Support cobblers with better infrastructure and cleaner workspaces.',
  'Enable hygiene, safety, and dignity in the daily work environment.',
  'Invite people to contribute money, materials, and partnerships.',
  'Create an NGO model that CSR partners can support confidently.'
]

const beneficiaryPoints = [
  {
    title: 'Supporters',
    text: 'Individuals, families, and organizations who want to contribute money, materials, or partnerships to the mission.'
  },
  {
    title: 'Direct Beneficiaries',
    text: 'Cobbler families and artisans who need better workplaces, hygiene support, tools, and livelihood stability.'
  },
  {
    title: 'Wider Impact',
    text: 'Local communities that gain from preserved craftsmanship, stronger livelihoods, and more dignified working conditions.'
  }
]

const sdgPoints = ['SDG 1 No Poverty', 'SDG 8 Decent Work', 'SDG 10 Reduced Inequalities', 'SDG 11 Sustainable Communities', 'SDG 12 Responsible Consumption']

const approachSteps = [
  'Start with a mission-first homepage that invites contribution.',
  'Show the daily realities of cobbler work with honest storytelling.',
  'Convert interest into support through clear inquiry and donation pathways.',
  'Track how contributions improve work life, hygiene, and dignity.'
]

const actionPoints = [
  'Mission and community story introduction',
  'Contribution inquiry and support entry points',
  'Impact section on cobbler livelihood support',
  'Honest, warm, NGO-focused visual language',
  'Trust-building CTA blocks for donors and CSR partners',
  'Impact summary for partners and supporters'
]

const valuePoints = [
  'High-impact support for a vulnerable livelihood group',
  'Strong alignment with SDGs',
  'Opportunity for scalable social transformation'
]

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}

export default function CSRProposal() {
  return (
    <>
      <section id="impact" className="content-section content-section--soft impact-section">
        <div className="container">
          <div className="impact-hero">
            <SectionTitle
              eyebrow="Why This Matters"
              title="What this initiative changes for cobblers and communities"
              description="ShoesPolish is now presented as an NGO-style initiative that creates support for cobblers and the families behind the craft."
            />
            <div className="impact-copy-card">
              <p>
                This initiative supports livelihoods, strengthens artisan dignity, and brings attention to the basic
                infrastructure and hygiene needs of cobbler work life.
              </p>
              <p>
                It builds a bridge between supporters who want to contribute and the people whose work keeps the craft alive.
              </p>
            </div>
          </div>
          <div className="card-grid card-grid--three impact-grid">
            {impactPoints.map((point) => (
              <article className="info-card impact-card impact-card--animated" key={point}>
                <span className="card-dot" />
                <p>{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="content-section impact-section">
        <div className="container split-layout">
          <div>
            <SectionTitle
              eyebrow="Vision & Objective"
              title="Community support, dignity, and livelihood restoration"
              description="The visual identity should feel compassionate, grounded, and clear about helping cobblers with practical support."
            />
          </div>
          <div className="bullet-panel">
            {visionPoints.map((point) => (
              <div className="bullet-item" key={point}>
                <span className="bullet-mark">•</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section--soft impact-section">
        <div className="container">
          <div className="beneficiary-top">
            <SectionTitle
              eyebrow="Target Beneficiaries"
              title="Who this initiative serves and how the impact flows"
              description="The model is designed to connect supporters with cobbler families in a way that creates practical, visible, and lasting benefit."
            />
            <figure className="beneficiary-visual" aria-label="Cobbler support workspace">
              <img src={cobbler1} alt="Cobbler working with shoes and tools" />
            </figure>
          </div>
          <div className="beneficiary-grid">
            {beneficiaryPoints.map((item) => (
              <article className="beneficiary-card" key={item.title}>
                <p className="beneficiary-label">{item.title}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section impact-section" id="partners">
        <div className="container">
          <SectionTitle
            eyebrow="Alignment with SDGs"
            title="CSR aligned with measurable development goals"
            description="The initiative can attract donors and CSR partners while making the social case clear and measurable."
          />
          <div className="pill-row">
            {sdgPoints.map((item) => (
              <span className="pill" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

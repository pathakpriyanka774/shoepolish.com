import React, {useState, useEffect} from 'react'

const services = [
  'Infrastructure support',
  'Workspace hygiene and sanitation',
  'Tools and equipment support',
  'Financial contribution',
  'Skill training sponsorship',
  'Community partnership'
]

export default function Booking({ isOpen, onClose }){

  const [form, setForm] = useState({
    name:'', email:'', phone:'', service:services[0], date:'', time:'', address:'', notes:''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  
  useEffect(()=>{
    if(!isOpen) return
    function onKey(e){ if(e.key==='Escape') onClose && onClose() }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[isOpen,onClose])

  function update(e){
    const {name, value} = e.target
    setForm(prev=>({...prev,[name]:value}))
  }

  function validate(){
    if(!form.name || !form.email || !form.phone) return 'Please provide name, email and phone.'
    return ''
  }

  function handleSubmit(e){
    e.preventDefault()
    const err = validate()
    if(err){ setError(err); return }
    setError('')
    
    // Create email subject and body
    const subject = encodeURIComponent('New Contribution Inquiry from ' + form.name)
    const body = encodeURIComponent(
      `New Contribution Inquiry\n\n` +
      `From: ${form.name} (${form.email})\n` +
      `Phone: ${form.phone}\n` +
      `Support Area: ${form.service}\n\n` +
      `Contact Preferences:\n` +
      `Preferred Date: ${form.date}\n` +
      `Preferred Time: ${form.time}\n` +
      `Address: ${form.address}\n\n` +
      `How they want to help:\n${form.notes}\n\n` +
      `---\nThis email was sent from the ShoesPolish contribution form.`
    )
    
    // Redirect to Gmail with pre-filled email
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=sivarenew120@gmail.com&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
    
    setSubmitted(true)
  }

  if(!isOpen) return null

  return (
    <div className="booking-modal" role="dialog" aria-modal="true">
      <div className="booking-backdrop" onClick={()=> onClose && onClose()} />
      <div className="booking-panel">
        <button className="booking-close" onClick={()=> onClose && onClose()}>✕</button>
        {submitted ? (
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">Gmail opened</p>
              <h2>Thanks — your email is ready to send</h2>
              <p className="section-description">We've opened Gmail with your inquiry pre-filled. Please review and send the email to complete your submission.</p>
            </div>
            <div style={{marginTop:20}}>
              <button className="btn btn-primary" onClick={()=>{ setSubmitted(false); setForm({name:'', email:'', phone:'', service:services[0], date:'', time:'', address:'', notes:''}); onClose && onClose(); }}>Done</button>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">Support the mission</p>
              <h2>Help a cobbler build a safer, better work life</h2>
              <p className="section-description">Tell us how you would like to contribute — funds, materials, workplace improvements, hygiene support, or partnerships.</p>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  Full name / organization name
                  <input name="name" value={form.name} onChange={update} placeholder="Your name" />
                </label>
                <label>
                  Gmail / email
                  <input name="email" value={form.email} onChange={update} placeholder="you@example.com" />
                </label>
                <label>
                  Phone number
                  <input name="phone" value={form.phone} onChange={update} placeholder="Contact number" />
                </label>
                <label>
                  Support area
                  <select name="service" value={form.service} onChange={update}>
                    {services.map(s=> <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>
                <label>
                  Preferred contact date
                  <input type="date" name="date" value={form.date} onChange={update} />
                </label>
                <label>
                  Preferred contact time
                  <input type="time" name="time" value={form.time} onChange={update} />
                </label>
                <label className="full">
                  Address / organization location
                  <input name="address" value={form.address} onChange={update} placeholder="Your city, office, or organization address" />
                </label>
                <label className="full">
                  How would you like to help?
                  <textarea name="notes" value={form.notes} onChange={update} rows={4} placeholder="Tell us about your contribution or CSR interest" />
                </label>
              </div>

              {error && <div className="form-error">{error}</div>}

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Open Gmail to Send Inquiry
                </button>
                <button type="button" className="btn btn-secondary" onClick={()=>{setForm({name:'',email:'',phone:'',service:services[0],date:'',time:'',address:'',notes:''}); setError('')}}>Clear</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

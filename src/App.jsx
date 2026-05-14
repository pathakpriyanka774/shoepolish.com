import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import Approach from './components/Approach'
import Community from './components/Community'
import Booking from './components/Booking'
import CSRProposal from './components/CSRProposal'
import Footer from './components/Footer'

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const openBooking = () => setBookingOpen(true)
  const closeBooking = () => setBookingOpen(false)

  return (
    <div className="app-root">
      <Navbar onOpenBooking={openBooking} />
      <main>
        <Hero onOpenBooking={openBooking} />
        <Showcase />
        <Services />
        <Approach />
        <Community />
        <CSRProposal />
      </main>
      <Booking isOpen={bookingOpen} onClose={closeBooking} />
      <Footer />
    </div>
  )
}

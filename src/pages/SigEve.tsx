import Footer from '@/components/footer/Footer'
import Head from '@/components/head/Head'
import MainCard from '@/components/single/MainCard'
import TicketCard from '@/components/single/TicketCa'
import TicketForm from '@/components/single/TicketForm'
import React from 'react'

const SigEve = () => {
  return (
    <div>
        <Head/>
        <MainCard/>
        <TicketCard/>
        <TicketForm/>
        <Footer/>
    </div>
  )
}

export default SigEve
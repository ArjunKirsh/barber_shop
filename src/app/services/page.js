import Banner from '@/components/Banner/Banner'
import BookingCard from '@/components/BookingCard/BookingCard'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner/>
      <ServiceCard/>
      <BookingCard/>
    </div>
  )
}

export default page
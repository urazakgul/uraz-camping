import PricingWrapper from '@/components/pricing/PricingWrapper'
import About from '@/components/ui/About'
import Campaign from '@/components/ui/Campaign'
import Carousel from '@/components/ui/Carousel'
import Reservation from '@/components/ui/Reservation'
import React from 'react'

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaign />
      <PricingWrapper />
      <About />
      <Reservation />
    </div>
  )
}

export default Index
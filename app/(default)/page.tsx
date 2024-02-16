export const metadata = {
  title: 'Genius AI',
  description: 'Genius AI, Diagnostico médico através de inteligência artificial',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Afiliations from '@/components/afiliations'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Features />
      <Afiliations />
      <Testimonials />
      <Newsletter />
    </>
  )
}

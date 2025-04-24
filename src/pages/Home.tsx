"use client"

import Head from '@/components/head/Head'
import { ColourfulTextDemo } from '@/components/hero/HeadLin'
import HeroCaro from '@/components/hero/HeroCaro'
import HeroSlider from '@/components/hero/HeroSlider'




const Home = () => {
  return (
    <div className=' overflow-hidden'>
        <Head/>
        <div>

        <HeroSlider/>
        </div>
        <ColourfulTextDemo/>
        <HeroCaro/>
    </div>
  )
}

export default Home
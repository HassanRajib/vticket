"use client"

import Footer from '@/components/footer/Footer'
import Head from '@/components/head/Head'
import { ColourfulTextDemo } from '@/components/hero/HeadLin'
import HeroCaro from '@/components/hero/HeroCaro'
import HeroSlider from '@/components/hero/HeroSlider'




const Home = () => {
  return (
    <div className=' overflow-hidden'>
        <Head/>
        <div className='w-auto'>

        <HeroSlider/>
        </div>
        <ColourfulTextDemo/>
        <HeroCaro/>
        <div className="h-auto w-full flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#0a0a0a] p-4 mt-3" >
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-black dark:text-white relative z-2 font-serif">
                Movie shows
              </h1>
            </div>
        <div>
        <HeroCaro/>
        <Footer/>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import { cn } from '@/lib/utils'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import ColourfulText from '../ui/colourful-text'

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

const BentoGri = () => {
    
    const items = [
        {
          title: "The Dawn of Innovation",
          description: "Explore the birth of groundbreaking ideas and inventions.",
          header: ( <img src='../image/tha.jpeg' alt='hello' className='w-full h-full object-cover rounded-xl'/>),
          
        },
        {
          title: "The Digital Revolution",
          description: "Dive into the transformative power of technology.",
          header: ( <img src='../image/tha.jpeg' alt='hello' className='w-full h-full object-cover rounded-xl'/>),
        },
        {
          title: "The Art of Design",
          description: "Discover the beauty of thoughtful and functional design.",
          header: ( <img src='../image/tha.jpeg' alt='hello' className='w-full h-full object-cover rounded-xl'/>),
         },
        {
          title: "The Power of Communication",
          description:"Understand the impact of effective communication in our lives.",
          header: ( <img src='../image/tha1.png' alt='hello' className='w-full h-fit object-cover rounded-xl'/>),
        },
        {
          title: "The Pursuit of Knowledge",
          description: "Join the quest for understanding and enlightenment.",
          header: ( <img src='../image/tha.jpeg' alt='hello' className='w-full h-full object-cover rounded-xl'/>),  
        },
        {
          title: "The Joy of Creation",
          description: "Experience the thrill of bringing ideas to life.",
          header:  ( <img src='../image/tha.jpeg' alt='hello' className='w-full h-full object-cover rounded-xl'/>), 
        },
        {
          title: "The Spirit of Adventure",
          description: "Embark on exciting journeys and thrilling discoveries.",
          header: ( <img src='../image/hero.png' alt='hello' className='w-full h-fit object-cover rounded-xl'/>),
        },
      ];
  return (
    <div>
        <div className="h-auto w-full flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#0a0a0a] p-4 mt-3" >
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-black dark:text-white relative z-2 font-other">
                Upcoming <ColourfulText text="Events" /> <br /> 
              </h1>
        </div>
        <BentoGrid className="max-w-4xl mx-auto mt-2 mb-3">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  )
}

export default BentoGri
import React from 'react'
import { Carousel } from '../ui/carousel'

const HeroCaro = () => {
    const slideDa = [
        {
            title: "C F",
            src: "../image/1.jpg"
        },
        {
            title: "s",
            src: "../image/2.jpg"
        },
        {
            title: "mails",
            src: "../image/3.png"
        },
        {
            title: "Bappa",
            src: "../image/4.jpg"
        },
        {
            title: "robi",
            src: "../image/5.png"
        }
    ]
  return (
    <div>
        <Carousel slides={slideDa}/>
    </div>
  )
}

export default HeroCaro
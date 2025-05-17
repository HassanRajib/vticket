import Autoplay from "embla-carousel-autoplay"
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

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
        },
        {
            title: "robi",
            src: "../image/5.png"
        }
    ]

    const plugin = React.useRef(
        Autoplay({ delay:2000, stopOnInteraction: false })
    )
  return (
    <div className="flex flex-col justify-center">
            <Carousel 
                plugins={[plugin.current]}
                opts={{loop: true,}}
                className="w-full max-w-5xl mx-auto" // bigger width for event cards
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {slideDa.map((slide, index) => (
                        <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                            <div className="p-2 flex flex-col items-center">
                                <Card className="overflow-hidden rounded-lg">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <img
                                            src={slide.src}
                                            alt={slide.title}
                                            className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72" // adjust the height
                                        />
                                    </CardContent>
                                </Card>
                                <p className="mt-2 text-center text-sm font-semibold text-black dark:text-white">
                                    {slide.title}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
  )
}

export default HeroCaro
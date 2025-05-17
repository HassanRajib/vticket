"use client"

const AboutFe = () => {
  return (
    
        <section className="w-full mx-auto py-10 bg-background dark:text-white">      
        
        <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
        {/* 1 */}
          <div
            className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
         
            <img className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="../image/tha.jpeg" alt="billboard image" />
      
            <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Dream, But Not A Mirage</h2>
              <p className="text-md text-justify mt-4">Get Set Rock is an initiative by a few fellow representatives of Bangladeshi Band Music Fans Community, also known as BBMFC. Having been involved with the community and the industry, we find a lot of sectors imperatively in need of improvement in a professional manner.</p>
            </div>
      
          </div>
  
          <div
            className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
 
            <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">The VPP Stratagem</h2>
      
              <p className="text-md text-justify mt-4">Despite having quite a few global grade musicians, Bangladesh has arguably not progressed enough in the music industry, especially for Band Music scenes. Even though it is a form of art with profound utilization and conceptual works, to engage the works to public</p>
            </div>

            <img className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="../image/tha.jpeg" alt="billboard image" />
      
          </div>
        </div>
      </section>
  )
}

export default AboutFe
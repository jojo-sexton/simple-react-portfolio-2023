import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 pt-[5rem]  ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-16">
          <div className="sm:text-right text-4xl font-bold">
            <p>Kia Ora! I'm Jojo, nice to meet you </p>
            <p className="text-pink-600 font-light">
              (Insert Us Shaking Shands In Your Head)
            </p>
          </div>
          <div>
            <p>
              I am a professional banker who builds applications in my free
              time. I have been lending for 10 year. Over the past decade,
              I've witnessed the ever-evolving landscape of the lending
              industry, particularly how technology changes the way we handle
              risk management. I am now looking for a role in a company that
              will allow me to combine my financial expertise and my passion for
              the digital world.
            </p>
            <p>
              Thank you for visiting my corner of the internet, and I look
              forward to sharing this incredible journey with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

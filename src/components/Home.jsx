import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
// import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] pt-[5rem]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full">
        <p className="text-pink-600">Kia Ora! my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Jojo Sexton
        </h1>
        <h2 className="text-xl sm:text-4xl font-bold text-[#8892b0]">
          {/* I am {' '}
          <span className="text-2xl sm:text-5xl font-bold text-[#8892b0]"> */}
          Mortgage Broker Manager/ Full Stack Developer
            {/* <TypeAnimation
              sequence={[
                'Broker Manager', // Types 'One'
                1000, // Waits 1s
                'Full Stack Developer', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            /> */}
          {/* </span> */}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-justify">
        I am a professional lender with over 10 years of experience in finance and banking. I love my job, but I am also passionate about computer science and enjoy coding in my free time. <br></br>I am now looking for an opportunity to shift my career to tech, where I can utilize my financial expertise to develop complex financial applications with AI, built-in security, and testing.  I want to contribute towards addressing critical challenges in the financial sector, including cybersecurity threats, digital transformation, regulatory compliance, and data management and analytics.
        </p>

        <div className="flex space-x-4">
          <a href="./work">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </a>

          <a
            href="CV-2023-Tech.pdf"
            download
            target="blank"
            alt="link to my Resume"
          >
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              Download Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home

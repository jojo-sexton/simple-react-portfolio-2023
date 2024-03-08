import React from 'react'

import HTML from '../assets/html.png'
import Python from '../assets/python.png'
import SQL from '../assets/SQL.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'
import Mongo from '../assets/mongo.png'
import HSBC from '../assets/hsbc.png'
import Westpac from '../assets/westpac.png'
import TSB from '../assets/TSB.png'

const Skills = () => {
  return (
    <div name="skills" className="w-full  bg-[#0a192f] text-gray-300 pt-[5rem]">
      {/* Container for Tech */}
      <div className="max-w-[1000px] mx-auto p-16 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills{' '}
          </p>
        </div>

        <p className="py-4 text-pink-600">Banking:</p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 items-center">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 items-center">
            <img className="w-20 mx-auto" src={HSBC} alt="HSBC logo" />
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 items-center ">
            <img className="w-20 mx-auto items-center" src={TSB} alt="TSB logo " />
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 items-center">
            <img className="w-20 mx-auto" src={Westpac} alt="Westpac logo" />
          </div>
          </div>

        <ul className='list-disc list-inside text-justify'>
          <li>10 years experience in banking and finance specialised in mortgage lending </li>
          <li>Extensive knowledge of banking and accounting practices and procedures. </li>
          <li>Debt and credit management </li>
          <li>Experience in corporate and small business accounting </li>
          <li>Understanding of compliance and tax planning </li>
          <li>Corporate and SME financial analysing  </li>
          <li>NZQA Level 5 - New Zealand Certificate in Financial Services - 2023</li>
          <li>Bachelor Degree - majoring in finance and commericial law</li>
          
        </ul>



        <p className=" text-pink-600 py-4 mt-8">Tech: <span className='text-white'>Here are the technologies I've acquired through both Dev Academy bootcamp and self-study</span></p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JS icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-4">PYTHON</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SQL} alt="SQL icon" />
            <p className="my-4">SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="Github icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">NODE JS</p>
          </div>
       
        </div>
      </div>

      {/* BANKIGN SKILLS */}

      
    </div>
  )
}

export default Skills

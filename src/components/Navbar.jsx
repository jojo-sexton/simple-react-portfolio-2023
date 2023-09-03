import React, { useState } from 'react'
import Logo from '../assets/logo.png'

// import icons from react-icons library
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

// link react scroll
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
          <img src={Logo} alt="my logo" style={{ width: '50px' }} />
        </div>

        {/* Menu */}

        <ul className="hidden md:flex">
          {/* anything about medium display, disply the menu as flex, else hides it */}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
           <a href='./skills'>Skills</a>
          </li>
          <li>
            <a href='./work'>Work</a>
          </li>
          <li>
           <a href='./contact'>Contact</a>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          }
        >
          <li className="py-6 text-4xl">
          <a href="/">Home</a>
          </li>
          <li className="py-6 text-4xl">
          <a href="/about">About</a>
          </li>
          <li className="py-6 text-4xl">
          <a href="/skills">Skills</a>
          </li>
          <li className="py-6 text-4xl">
          <a href="/work">Work</a>
          </li>
          <li className="py-6 text-4xl">
          <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Social icons on the left handside  */}
      <div className="hidden lg:flex fixed flex-col left=0 top-[35%]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jojo-sexton"
              target="blank"
              alt="link to my linkedin"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/jojo-sexton"
              target="blank"
              alt="link to my github"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="CV-2023-Tech.pdf"
              download
              target="blank"
              alt="link to my Resume"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

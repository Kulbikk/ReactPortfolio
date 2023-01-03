import React, { useState } from 'react';

import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';


const NavBar = () => {

    const [nav, setNav] = useState(false)


    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },        {
            id: 4,
            link: 'experience',
        },
        {
            id: 5,
            link: 'contact',
        }
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black fixed px-4 '>
        <div>
            <h1 className='font-signature text-5xl ml-2'>Patryk</h1>
        </div>

        <ul className='md:flex hidden'>
            {links.map(({ id, link}) => (
                 <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={700}> {link} </Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} class="cursor-pointer md:hidden pr-4 z-10 text-gray-500">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>


        {nav && (
                    <ul className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {links.map(({ id, link}) => (
                        <li key={id} className='px-4 cursor-pointer capitalize text-4xl py-6 font-medium text-gray-500 hover:scale-105 duration-200'>
                                          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={800}> {link} </Link>
                </li>
                        </li>
                        ))}
        
               </ul>

        )}


    </div>
  )
}

export default NavBar
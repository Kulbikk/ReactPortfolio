import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {

    const techs = [
        {
            id: 1,
            source: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            source: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            source: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            source: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            source: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            source: nextjs,
            title: 'Next Js',
            style: 'shadow-white'
        },
        {
            id: 7,
            source: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
    ]


  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen '>
        <div className='max-w-screen-lg p-4 flex mx-auto flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 justify-center border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {techs.map(({id, source, title, style}) => (
                    <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + " " + style }>
                    <img src={source} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Experience
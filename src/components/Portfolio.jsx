import React from 'react'
import GridTailwind from '../assets/portfolio/GridTailwind.png'
import LandingPageTailwind from '../assets/portfolio/LandingPageTailwind.png'
import RandomAdvice from '../assets/portfolio/RandomAdvice.png'
import SplitCalculator from '../assets/portfolio/SplitCalculator.png'
import TodoApp from '../assets/portfolio/TodoApp.png'
import UserRatingJs from '../assets/portfolio/UserRatingJs.png'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: SplitCalculator,
            linkCode: 'https://github.com/Kulbikk/TipCalculator-Js-tailwind',
            linkDemo: 'https://tipcalculator-jstailwind.netlify.app/',
        },
        {
            id: 2,
            src: UserRatingJs,
            linkCode: 'https://github.com/Kulbikk/UserRatingJs#how-did-we-do-',
            linkDemo: 'https://customratingjs.netlify.app/'
        },
        {
            id: 3,
            src: LandingPageTailwind,
            linkCode: 'https://github.com/Kulbikk/TailwindLandingPage',
            linkDemo: 'https://tailwind-frontend2.netlify.app/'
        },
        {
            id: 4,
            src: GridTailwind,
            linkCode: 'https://github.com/Kulbikk/Grid-Tailwind',
            linkDemo: 'https://gridntailwind.netlify.app/'
        },
        {
            id: 5,
            src: TodoApp,
            linkCode: 'https://github.com/Kulbikk/Todo-app',
            linkDemo: 'https://todoapp4567.netlify.app/'
        },
        {
            id: 6,
            src: RandomAdvice,
            linkCode: 'https://github.com/Kulbikk/Random-Advice-Generator',
            linkDemo: 'https://randomadvice20.netlify.app/'
        }
    ]


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>
                    Check Out some of my work right here!
                </p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
            {
                portfolios.map(({ id, src, linkCode, linkDemo }) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 h-56'/>
                        <div className='flex justify-center items-center'> 
                        <button className='w-1/2 px-6 py-3 duration-200  hover:scale-105 '><a href={linkDemo} target="_blank" rel="noreferrer">Demo</a></button>
                        <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105 '> <a href={linkCode} target="_blank" rel="noreferrer"> Code</a> </button>
                        </div>
                     </div>
                
                ))
            }
            </div>

           
        </div>

    </div>
  )
}

export default Portfolio
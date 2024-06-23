import React from 'react'
import Progressbar from './progressBar/progressbar';
import ExSvg from '../assets/exp.png';
import Image from 'next/image';
const Skills = () => {
    return (
        <div className='container'>
            <div className='mainskill gap-4 sm:block lg:flex lg:justify-between bg-[#070d1b]'>
                <div className='skilltext sm:w-[100%] lg:w-[50%] '>
                    <h2 className="st-skill-title font-serif my-5 font-semibold text-[28px]">All the skills that I have in that field of work are mentioned.</h2>
                    <div className="st-skill-subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</div>
                    <div className='svgExpresce'>

                    </div>
                </div>
                <div className='progressSkills  sm:w-[100%] lg:w-[50%]'>
                    {/* <div className="st-height-b0 st-height-lg-b30"></div> */}
                    <div className="st-progressbar-wrap">
                        <Progressbar />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Skills
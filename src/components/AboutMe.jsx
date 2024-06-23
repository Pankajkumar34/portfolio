import React from 'react';
import Image from 'next/image';
import myImage from '../assets/about.jpg'
import SlickSlider from './slickSlider/slickSlider';
import { HtmlSvg, CssSvg, TailwindSvg, BootstrapSvg, ReactSvg, NodeSvg, ExpressSvg, MonoodbSvg, MysqlSvg } from '../techIcons/allIconns';

const icons = [HtmlSvg, CssSvg, TailwindSvg, BootstrapSvg, ReactSvg, NodeSvg, ExpressSvg, MonoodbSvg, MysqlSvg];
const AboutMe = () => {
  return (
    <div className='container'>
      <div className='heading-about  my-[50px] '>
        <div className='title-about text-center mb-[80px]'>
          <h2 className='text-[#fec544] text-center my-2 text-[30px] font-serif font-extrabold'>About Me</h2>

          <span className='text-center text-[#fec544]'>------------------------------------------</span>
        </div>
        <div className='aboutmedetails sm:block lg:flex lg:justify-between'>
          <div className='myimage sm:mb-3 sm:w-[100%] lg:w-[50%] '>
            <Image src={myImage} alt="my image" className=' ' />
          </div>
          <div className='details sm:w-full lg:w-[50%]'>
            <div className='mydetails'>
              <h2 className="st-text-block-title sm:text-[25px] font-bold lg:text-[30px]">Hi There! I&apos;m Pankaj Kumar</h2>
              <h4 className="st-text-block-subtitle">Mern Stack Developer</h4>
              <div className="st-text-block-text my-2">
                <p>I am a MERN stack developer&rsquo; proficient in building dynamic and responsive web applications using MongoDB&lsquo; Express.js&lsquo; React&lsquo; and Node.js.</p>
              </div>
              <ul className="st-text-block-details st-mp0">
                <li><span>Birthday</span> : <span>Aug 05&rsquo; 2002</span></li>
                <li><span>Phone</span> : <span>+91 8115809072</span></li>
                <li><span>Email</span> : <span>pankajgithubnew@gmail.com</span></li>
                <li><span>From</span> : <span>Chandigarh Mohali (Sector 71)</span>
                </li>
                <li><span>Language</span> : <span>English&rsquo; Hindi</span></li>
                <li><span>Nationality</span> : <span>India</span></li>
                <li><span>Experience</span>: <span>+1 year</span></li>
              </ul>
              <div className="st-text-block-btn">
              <a className="st-btn st-style1 st-color1" href="/cv/pankaj_2.0.pdf" download="pankaj_2.0.pdf">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[500px]'>
      <div className='title-about text-center mb-[80px]'>
          <h2 className='text-[#fec544] text-center my-2 text-[30px] font-serif font-extrabold'>Technology</h2>

          <span className='text-center text-[#fec544]'>------------------------------------------</span>
        </div>
        <SlickSlider slickList={icons} />
      </div>
    </div>
  );
};

export default AboutMe;

import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typed from 'react-typed';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-t from-[#0a192f] to-[#1a3866]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full animate-fadeUp ease-out'>
        <p className='text-pink-300 pt-[200px]'>Hi, my name is</p>
        <Typed
          strings={['AYOUB KHAIAR']}
          typeSpeed={150}
          backDelay={4000}
          backSpeed={30}
          className='text-4xl sm:text-7xl font-bold text-[#bbcbff]'
        />
        <h2 className='text-4xl sm:text-7xl font-bold text-[#85a4ff]'>
          I'm a Student Programmer.
        </h2>
        <p className='text-[#abbcee] py-4 max-w-[850px]'>
          I'm a student studying computer science with experience in many coding languages
          and softwares. Currently, I'm focused on building interactive mobile apps and learning more about
          web design and app development.
        </p>
        <div className='flex flex-col items-center pt-[100px]'>
          <Link to="about" smooth={true} duration={500} className='group'>
              <button className='text-white text-xl group border-2 px-[100px] py-[30px] my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              Learn More
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

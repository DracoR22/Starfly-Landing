import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='about' className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
      <div>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>STARFLY</h1>
      <p className='py-2'>Our goal is to make sure that our clients enjoy their night by reading all of our fascinating
        before bed short stories and books
      </p>
      <div className='flex justify-between md:w-[75%] my-6'>
        <FaFacebookSquare size={30}/>
        <FaInstagram size={30}/>
        <FaTwitterSquare size={30}/>
        <FaGithubSquare size={30}/>
      </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-[#BFA181]'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Home</li>
                <li className='py-2 text-sm'>Stories</li>
                <li className='py-2 text-sm'>Plans</li>
                <li className='py-2 text-sm'>About</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-[#BFA181]'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Books</li>
                <li className='py-2 text-sm'>More</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-[#BFA181]'>Careers</h6>
            <ul>
                <li className='py-2 text-sm'>Voice Acting</li>
                <li className='py-2 text-sm'>Designers</li>
                <li className='py-2 text-sm'>Writters</li>
                <li className='py-2 text-sm'>Transcriptions</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-[#BFA181]'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Legal</li>
                <li className='py-2 text-sm'>Copyright</li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer

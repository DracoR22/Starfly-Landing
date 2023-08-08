import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-[#BFA181] px-4 bg-[#0A1828]'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
       <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want Free Books Samples?</h1>
       <p className='text-white'>Sign Up To Stay Tuned</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email'/>
            <button className='bg-[#13c48c] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 px-6
                text-black hover:bg-[#0b8a62] transition duration-500'>Notify Me</button>
            </div>
            <p className='text-white'>One Free Book Every Week!</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

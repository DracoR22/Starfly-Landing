import React from 'react';
import Typed from 'react-typed';

export function Hero(){
    return(
        <div className="text-[#BFA181] bg-cover bg-center h-screen" style={{backgroundImage: "url('background.jpg')"}}> 
           <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
               <p className="text-[#00df9a] font-bold p-2">BEFORE BED STORIES</p>
               <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">GoodNight Insomnia</h1>
               <div className='flex justify-center items-center'>
               <p className='md:text-5xl sm:text-4xl text-xl font-bold pt-4'> All kind of</p>
               <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pt-4 pl-2 md:pl-4' strings={[ ' Stories', 'Tales', 'Fables', 'Magic!']} typeSpeed={120} backSpeed={140} loop/>
                </div>
               <p className='md:text-2xl text-xl font-bold text-white pt-4'>Why waste your nights awake if you can start dreaming</p>
               <button className='bg-[#13c48c] w-[200px] rounded-md font-medium my-6 mx-auto py-3
                text-black hover:bg-[#0b8a62] transition duration-500'>Start Dreaming</button>
           </div>
        </div>
    )
}
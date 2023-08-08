import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from'react-icons/ai'

export function Navbar(){

const [nav, setnav] = useState(true)
const handleClick = () =>{
    setnav(!nav)}


return(
    
    <div className='flex justify-between items-center h-24 mx-auto max-w-[1240px] px-4 text-[#BFA181]'>
        <img src="moon-bg.png" alt="Logo" id='logo' className='h-[80px]'/>
    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>STARFLY</h1>
    <ul className='text-white hidden md:flex font-semibold'>
          <a href="/"><li className='p-4  hover:text-[#BFA181] transition duration-500'>Home</li></a>     
        <a href="#stories"><li className='p-4 hover:text-[#BFA181] transition duration-500'>Stories</li></a> 
        <a href="#plans"><li className='p-4 hover:text-[#BFA181] transition duration-500'>Plans</li></a> 
        <a href="#about"><li className='p-4 hover:text-[#BFA181] transition duration-500'>About</li></a> 
    </ul>
         <div onClick={handleClick} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={25} cursor={'pointer'}/> : <AiOutlineMenu size={25} cursor={'pointer'}/>}
            
         </div>

         <div className={!nav ? 'fixed left-1/2 top-0 transform -translate-x-1/2 w-[80%] border-r border-[#BFA181]  border-b border-l ease-in-out duration-500' : 
          'fixed top-[-100%] left-1/2 transform -translate-x-1/2 translate-y-0 ease-in-out duration-500 w-[80%]'}>
       
            <ul className='p-4 pt-24 uppercase bg-[#000300] bg-opacity-80 font-semibold'>
            <a href="/"><li className='p-4 border-b border-b-[#BFA181] hover:text-[#b98b59] transition duration-500'>Home</li></a> 
            <a href="#stories"><li className='p-4 border-b border-b-[#BFA181] hover:text-[#b98b59] transition duration-500'>Stories</li></a> 
            <a href="#plans"><li className='p-4 border-b border-b-[#BFA181] hover:text-[#b98b59] transition duration-500'>Plans</li></a> 
            <a href="#about"><li className='p-4 hover:text-[#b98b59] transition duration-500'>About</li></a> 
            </ul>
         </div>
    </div>
  
)
}   
import { useState } from 'react'
import { ImBook } from 'react-icons/im'

export function Stories(){

 const [iconColor, setIconColor] = useState("#BFA181")
 function handleClick(){
    const newColor = iconColor === "#BFA181" ? "#00df9a" : "#BFA181"
    setIconColor(newColor);}

    const [iconColor2, setIconColor2] = useState("#BFA181")
 function handleClick2(){
    const newColor2 = iconColor2 === "#BFA181" ? "#00df9a" : "#BFA181"
    setIconColor2(newColor2);}

    const [iconColor3, setIconColor3] = useState("#BFA181")
 function handleClick3(){
    const newColor3 = iconColor3 === "#BFA181" ? "#00df9a" : "#BFA181"
    setIconColor3(newColor3);}
  
 

    return(
      <div id='stories' className='w-full py-16 px-4'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-2'>

          <img src="harrypotter.jpg" alt="Harry Potter" />
          <h2 className='text-[#BFA181] md:text-4xl sm:text-2xl text-xl flex items-center border-b-2 border-[#BFA181] pt-4'>
         <a href="https://www.goodreads.com/book/show/72193.Harry_Potter_and_the_Philosopher_s_Stone" target='_blank'> <ImBook style={{color:iconColor3}} onClick={handleClick3} className='ml-4 mr-4 md:text-5xl cursor-pointer'/></a> Harry Potter And The Philosopher Stone</h2>
         
            <img src="gold.jpg" alt="Midas and the golden touch" className='pt-[70px]'/>
            <h2 className='text-[#BFA181] md:text-4xl sm:text-2xl text-xl flex items-center border-b-2
             border-[#BFA181] pt-4'>
                <a href="https://www.greeka.com/greece-myths/king-midas/" target='_blank'><ImBook style={{color:iconColor2}} onClick={handleClick2} className='ml-4 mr-4 md:text-5xl cursor-pointer'/></a>Midas And The Golden Touch</h2>

           <img src="wolf.jpg" alt="The Boy Who Cried Wolf" className='pt-[70px]'/>
           <h2 className='text-[#BFA181] md:text-4xl sm:text-2xl text-xl flex items-center border-b-2
             border-[#BFA181] pt-4'>
            <a href="http://www.storyarts.org/library/aesops/stories/boy.html" target='_blank'><ImBook style={{color:iconColor}} onClick={handleClick} className='ml-4 mr-4 md:text-5xl cursor-pointer'/></a>The Boy Who Cried Wolf</h2>
        </div>
      </div>
    )
}
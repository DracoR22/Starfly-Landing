import React from 'react'

const Cards = () => {
  return (
    <div id='plans' className='w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full text-white shadow-xl bg-[#0A1828] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-[#BFA181] text-2xl font-bold text-center py-8'>Single User</h2>
              <p className='text-center text-4xl font--bold'>$3.99</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 Books</p>
                <p className='py-2 border-b mx-8'>1 Account</p>
                <p className='py-2 border-b mx-8'>20 AudioBooks</p>
              </div>
              <button  className='bg-[#13c48c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6
                text-black hover:bg-[#0b8a62] transition duration-500 '>Start Trial</button>
            </div>
            <div className='w-full text-white shadow-xl bg-[#0A1828] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-[#BFA181] text-2xl font-bold text-center py-8'>Frequent User</h2>
              <p className='text-center text-4xl font--bold'>$5.99</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 Books</p>
                <p className='py-2 border-b mx-8'>2 Accounts</p>
                <p className='py-2 border-b mx-8'>30 AudioBooks</p>
              </div>
              <button  className='bg-[#13c48c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6
                text-black hover:bg-[#0b8a62] transition duration-500 '>Start Trial</button>
            </div>
            <div className='w-full text-white shadow-xl bg-[#0A1828] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-[#BFA181] text-2xl font-bold text-center py-8'>Family Bundle</h2>
              <p className='text-center text-4xl font--bold'>$9.99</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 Books</p>
                <p className='py-2 border-b mx-8'>5 Accounts</p>
                <p className='py-2 border-b mx-8'>50 AudioBooks</p>
              </div>
              <button  className='bg-[#13c48c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6
                text-black hover:bg-[#0b8a62] transition duration-500 '>Start Trial</button>
            </div>
        </div>  
    </div>
  )
}

export default Cards

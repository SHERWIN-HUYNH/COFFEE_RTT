import  { useState } from 'react'
import clsx from 'clsx';
import { Navbar } from '.';


const Model = () => {
    const [open,setOpen] = useState(false);
  return (
    <>
    <button className='lg:hidden cursor-pointer hover:scale-125 border-none bg-transparent' onClick={()=>setOpen(!open)}>
      <svg className=' text-xl' xmlns="http://www.w3.org/2000/svg" color='mainColor' height="1em" viewBox="0 0 448 512"><path className='border-none' d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    </button>
    {open &&(
          <>
          <div
            className={clsx('fixed inset-0 z-40 h-screen w-screen bg-black/70', {
              hidden: !open
            })}
            onClick={()=>setOpen(!open)}
            >
               
            
            </div>
          <div
            className={clsx('fixed inset-0 z-50 h-screen w-80 bg-primary/90 p-5 text-black transition-transform', {
              'translate-x-0': open,
              '-translate-x-full': !open
            })}
          >
               <ul className='flex flex-col'>
                   <Navbar/>
               </ul>
           
          </div>
        </>
    )}
    </>
    )
}

export default Model
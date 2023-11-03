
import con_meo from '../assets/images/con_meo.png';
import Button from './Button';
import Model from './Model';
import Navbar from './Navbar';

const Header = () => {
  return (
    <nav className="relative z-30 flex items-center w-full lg:justify-between justify-around">
            <div className="flex items-center lg:-gap-x-4">
                <figure className="lg:w-[181px] lg:h-[159px] w-[117px] h-[104px]">
                    <img className= "max-w-full object-cover"src={con_meo} alt="LOGO" />
                </figure>
                <ul className="lg:flex items-center justify-center list-none gap-x-4 hidden ">
                    <Navbar/>
                </ul>
            </div>
          
        <div className="flex items-center justify-center lg:gap-x-4 gap-x-2">
            <button className="bg-transparent border-none font-bold text-mainColor text-xl hover:cursor-pointer">Login</button>
            <Button paddingX='px-8' paddingY='py-3' backGround='bg-mainColor'/>
        </div>

       
        <Model/>
    </nav>
  )
}

export default Header



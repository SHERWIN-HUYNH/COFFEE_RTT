
import con_meo from '../assets/images/con_meo.png';


const slideLeft = "cursor-pointer py-1 hover:text-gray-800 relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-[#3C0E0E] after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300";

const Navbar = () => {
  return (
    <nav className=" px- flex items-center w-full justify-between">
        <div className="flex items-center justify-start">
            <figure className="lg:w-[191px] lg:h-[169px] w-[117px] h-[104px]">
                <img className= "max-w-full object-cover"src={con_meo} alt="LOGO" />
            </figure>

            <ul className="flex items-center justify-center list-none gap-x-8">
                <li className={slideLeft}><a className="no-underline text-xl lg:font-medium text-zinc-900  font-bold font-['Poppins']" href="#!">Meow Café</a></li>
                <li className={slideLeft}><a className="no-underline text-xl lg:font-medium text-zinc-900  font-bold font-['Poppins']" href="#!">Início</a></li>
                <li className={slideLeft}><a className="no-underline text-xl lg:font-medium text-zinc-900  font-bold font-['Poppins']" href="#!">Produtos</a></li>
                <li className={slideLeft}><a className="no-underline text-xl lg:font-medium text-zinc-900  font-bold font-['Poppins']" href="#!">Sobre</a></li>
            </ul>

        </div>
       
        <div className="flex items-center justify-center gap-x-4">
            <button className=" bg-transparent border-none font-bold text-[#3C0E0E]">Login</button>
            <button className="bg-[#3C0E0E] border-none rounded-full text-white px-6 py-2 lg:px-8 lg:py-3">Delivery</button>
        </div>
    </nav>
  )
}

export default Navbar

const NAVBAR = [
    'Inicio',
    'Produtos',
    'Sobre',
    'Blog'
  ]
  
  export default function Navbar() {
    return (
      <>
      
      {NAVBAR.map(nav => (
          <li className="py-4">
             <a key={nav} href="#!" className="relative px-3 tracking-[0.5px]text-xl lg:font-bold text-zinc-900 lg:text-mainColor font-semibold after:content-['']
              after:absolute after:bg-mainColor after:h-[3px] after:w-[0] after:left-[0] after:-bottom-[10px] after:[transition:0.3s] hover:after:w-full">
            {nav}
          </a>
          </li>
         
        ))}
     
       
      </>
    )
  }
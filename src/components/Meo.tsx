import meoCoffee from '../assets/images/meoCoffee.png'

const Meo = () => {
  return (
    <section className="w-full lg:h-[458px] mt-[148px] flex flex-col lg:flex-row ">
            <div className="realtive lg:w-2/3 box-border h-full w-full lg:pl-11 lg:pt-14 pt-[53px] px-[42px] flex lg:rounded-l-[48px] rounded-tl-[48px] bg-gradient-to-bl from-orange-950 to-red-200 ">   
                    <div className='max-w-full flex gap-y-7 flex-col'>
                        <h1 className="lg:w-[308.28px] text-white text-[80px] font-bold font-['Poppins'] leading-[83.60px] border-b-transparent hover:border-b-8 hover:border-b-white">Meow Enjoy</h1>
                        <p className=" text-white text-xl font-medium">Todos os sábados e domingos <br/>Venha tomar o seu brunch com a gente!</p>
                        <p className='text-base font-semibold'>Faça uma reserva </p>
                    </div>             
                    <div className=" z-20 lg:-mt-28 lg:ml-3  sm:mt-[150px] sm:-ml-[300px]">
                        <img src={meoCoffee} alt="" className="lg:w-[631.88px] lg:h-[562.56px] w-[165px] h-[137px] object-cover"/>
                    </div>
            </div>
           
            <div className=' lg:w-1/3 box-border w-full h-full p-[53px] px-[42px] text-white lg:rounded-r-[48px] rounded-b-[48px] lg:px-11 lg:pt-14 bg-gradient-to-bl from-[#8F423D] to-white '>
                <h1 className="mb-2 text-7xl font-bold">
                Onde estamos
                </h1>
                <hr className="h-1 w-28 bg-white mb-4" />
                <p className="mb-4">Você pode nos encontrar no endereço:</p>
                <div className='flex items-start'>
               
                <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' height="2em" viewBox="0 0 384 512">
                 <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                 <p className="mb-4 ml-2">Rua do Miado 234, Gatolândia</p>
                </div>
              
            </div>
       
    </section>
  )
}

export default Meo

import cfpackage from '../assets/images/packages.png'
const Packages = () => {
  return (
    <section className=" flex justify-center items-center lg:flex-row flex-col w-full pt-[137px] pb-[50px] bg-gradient-to-bl from-red-200 to-orange-950 rounded-[48px]">
        <figure className=" -mt-44">
            <img src={cfpackage} className="max-w-full" alt="Coffee packages"/>
        </figure>
        <div className="lg:text-right text-white flex flex-col gap-y-4 lg:items-end items-center">
            <h1>Levamos até você!</h1>
            <p>Estamos nos principais aplicativos de Delivery!</p>
            <button className="text-black text-base font-semibold font-['Poppins'] leading-[25.12px] hover:cursor-pointer hover:opacity-1 hover:shadow-[12px_12px_15px_-3px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] w-[265.65px] h-[47.09px] bg-white rounded-[25px] border-none">Delivery</button>
        </div>
    </section>
  )
}

export default Packages
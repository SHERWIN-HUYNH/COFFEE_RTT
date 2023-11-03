


import intro_img from '../assets/images/intro_img.png'
const INTRO = () => {
  return (
   <section className="flex lg:flex-row items-center justify-between flex-col mt-12 px-8">
        <div className=" w-full flex items-center flex-col  gap-y-3">
            <h1 className=" lg:text-[80px] text-4xl font-semibold  leading-[56.52px] lg:font-bold lg:leading-[83.60px]">Croissants</h1>
            <span className="w-[48.59px] h-[2px] bg-black"></span>
            <p className=" lg:text-[40px]  font-medium lg:leading-[41.80px]">Conheça nossa receita</p>
            <p className=" text-base font-normal lg:leading-[25.12px]">A nossa receita de Croissant vai te surpreender. Croissants clássicos ou recheados!</p>
            <p className=" text-base font-semibold leading-[25.12px]">Todos os croissants </p>
        </div>

        <figure>
            <img src={intro_img} alt="" />
        </figure>
   </section>
  )
}

export default INTRO
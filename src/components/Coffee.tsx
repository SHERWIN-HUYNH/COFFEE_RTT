
import coffee1 from '../assets/images/coffee1.png'
import coffee2 from '../assets/images/coffee2.png'
import coffee3 from '../assets/images/coffee3.png'

const MENUS = [
    {
      title: 'Capuccino',
      price: 'R$ 24,00',
      desc: 'Café expresso , leite vaporizado, espuma e um toque de caramelo.',
      img: coffee1,
      bg: 'linear-gradient(203deg, #F6C7C5 4.72%, #C27D7A 102.83%)',
      cssBut:'hover:cursor-pointer hover:opacity-1 hover:shadow-[12px_12px_15px_-3px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] w-[265.65px] h-[47.09px] bg-white rounded-[25px] border-none'
    },
    {
      title: 'Café ao Leite',
      price: 'R$ 16,00',
      desc: 'O clássico, amado pelos brasileiros, com um toque de sofisticação!',
      img: coffee2,
      bg: 'linear-gradient(203deg, rgba(250, 250, 250, 0.95) 4.72%, rgba(84, 21, 17, 0.58) 102.83%)',
      cssBut:'hover:cursor-pointer hover:opacity-1 hover:shadow-[12px_12px_15px_-3px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] w-[265.65px] h-[47.09px] bg-white rounded-[25px] border-none'

    },
    {
      title: 'Café Preto',
      price: 'R$ 12,00',
      desc: 'Grãos selecionados feitos no seu método de preparo favorito.',
      img: coffee3,
      bg: 'linear-gradient(203deg, rgba(10, 9, 9, 0.95) 4.72%, rgba(84, 21, 17, 0.95) 102.83%)',
      cssBut:'hover:cursor-pointer hover:opacity-1 hover:shadow-[12px_12px_15px_-3px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] w-[265.65px] h-[47.09px] bg-white rounded-[25px] border-none'

    }
  ]
  
//   interface Props {
//     className?: string
//   }
  
const Coffee = () => {
  return (
    <section className="w-full ">
    <div className="text-center flex items-center flex-col lg:gap-y-3 gap-y-2">
            <h3 className=" flex items-center justify-center  pt-2  text-[40px] font-semibold leading-[52.80px]">Café</h3>
            <div className="w-[65.48px] h-[3px] bg-red-950"></div>
            <p className=" text-base font-normal leading-[25.12px]">Conheça nossos cafés exclusivos pensados e preparados por nossos baristas renomados. </p>
            <p className="  text-base font-semibold leading-[25.12px]">Veja Todos </p>
    </div>
    
    <div className="flex lg:flex-row flex-col items-center gap-y-7 justify-between w-full mt-4 lg:mt-6">
       {MENUS.map(menu =>(
        <div   key={menu.title}
               className= {` max-w-[293.65px] max-h-[468.15px] flex flex-col justify-between rounded-3xl bg-primary px-7 py-6 pt-12 text-center text-white `} style={{background:menu.bg}} >
            <figure className="pt-4 flex items-center justify-center ">
                    <img src={menu.img} alt="COFFEE" className=" min-w-[320px] h-[200px] object-cover "/>
                </figure>
                <div className="flex items-center justify-center flex-col gap-y-3">
                    <p className=" text-center text-white text-xl font-semibold leading-loose">{menu.price}</p>
                    <h3 className="w-[227.30px] h-[41.55px] text-center text-white text-[32px] font-semibold leading-[50.24px]">{menu.title}</h3>
                    <p className=" text-center text-white text-sm font-normal leading-snug">{menu.desc}</p>
                    <button className={menu.cssBut}>Delivery</button>
                </div>

        </div>
       ))}
    </div>

    </section>
  )
}

export default Coffee


 
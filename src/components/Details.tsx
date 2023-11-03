import details1 from '../assets/images/coffee_details_1.jpg'
import details2 from '../assets/images/coffee_details_2.jpg'
import details3 from '../assets/images/coffee_details_3.jpg'

const Details = () => {
  return (
    <>
    <section className="realtive z-20  mt-40 w-[938px] flex lg:items-center lg:flex-row justify-between flex-col ">
      <div>
        <p className="text-xl font-medium leading-[20.90px]">Sobre nós</p>
        <h3 className="lg:w-[449px] lg:h-[313px] w-full text-5xl font-bold leading-[50.16px]">Nós oferecemos uma experiência inesquecível para amantes de café e pais de pet!</h3>
      </div>

      <div className="lg:w-[338px] w-full">
        <h5 className="text-base font-bold"> O melhor lugar para apreciar o seu café</h5>
        <p className="text-base font-normal">No Meow Cafe, priorizamos a criação de um espaço onde tanto os seres humanos quanto seus animais de estimação possam relaxar e desfrutar.</p>
        <br/>
        <p>Nosso design interior é inspirado na harmonia e conforto, com sofás aconchegantes, iluminação suave e uma decoração que remete à natureza e à alegria que os animais trazem para </p>
      </div>

    
    </section>
      {/* IMAGE 1 */}
      <figure className="absolute z-10 left-0 bottom-4 lg:w-[300px] lg:h-[320px] w-[250px] h-[180px] m-0">
        <img src={details1} alt="" className='w-full h-full object-contain' />
      </figure>

      {/* IMAGE 2 */}

      <figure className="absolute z-10 right-0 -bottom-10 lg:w-[200px] lg:h-[220px] w-[250px] h-[180px] m-0">
        <img src={details2} alt="" className='w-full h-full object-contain' />
      </figure>

      {/* IMAGE 3 */}

      <figure className="absolute z-10 top-0 right-0 lg:w-[300px] lg:h-[320px] w-[250px] h-[180px] m-0">
        <img src={details3} alt="" className='w-full h-full object-contain' />
      </figure>
      </>
  )
}

export default Details
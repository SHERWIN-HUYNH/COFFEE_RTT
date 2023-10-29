

import { Navbar } from "./components";

const styles = {
  boxWidth: "mx-auto w-[1170px] ",
  flexCenter:"flex items-center justify-center",
  gridCol3:"grid grid-cols-1 lg: grid-cols-3 lg:",
  bigHeading:"no-underline text-[#3C0E0E] text-4xl font-semibold font-['Poppins'] leading-[56.52px] lg:text-pink-950 lg:text-[80px] lg:font-bold lg:leading-[83.60px]",
  mediumHeading: " no-underline text-white font-['Poppins'] text-4xl lg:text-[40px] font-bold  lg:leading-[41.80px]",
  para:"no-underline text-[#3C0E0E] text-base font-normal font-['Poppins'] leading-[25.12px]",
  normalSize:"no-underline text-zinc-900 lg:text-2xl lg:font-medium font-['Poppins'] text-base font-bold ",
  ulText:"no-underline text-zinc-900 text-base font-bold font-['Poppins']",
  paddingX: "lg:px-50 px-8",
  paddingY: "lg:py-56 py-8",
  padding: "lg:px-56 px-8 lg:py-52 py-6",
  marginX: "lg:mx-56 mx-6",
  marginY: "lg:my-16 my-6",
  buttonRounded:"min-w-[152px] min-h-12 bg-[#421A1A] rounded-full shadow",
  bg_primary:"bg-[#F7F2E8]",

}

const App = ()=>{
  return (
   <div className=" bg-primary w-screen p-0 mx-auto border-box ">
        <div className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingX}`}>
          <Navbar/>
        </div>
   </div>
  )
}

export default App;
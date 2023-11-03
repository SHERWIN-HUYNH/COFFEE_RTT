import heroImg from "../assets/images/heor_img.png";
const Hero = () => {
  return (
    <section className="w-full pt-6 pb-12">
      {/* Content block */}
      <div className="relative z-20 flex flex-col gap-y-4">
        <p className=" my-0 text-2xl font-bold">
          Sabor inesquecível
        </p>
        <h1 className=" text-[32px] lg:text-[80px] font-bold leading-[33.44px] lg:leading-[83.60px] ">
          Meow Café
        </h1>
        <p className="lg:w-[351px] lg:h-[108px] my-0 text-base font-normal lg:leading-[25.12px]">
          Um lugar perfeito para pais de pets e amantes de café. Nossa cafeteria
          tem um espaço confortável para você e seu melhor amigo.{" "}
        </p>
      </div>

      <img
        src={heroImg}
        alt="HERO IMAGE"
        className="lg:w-[686px] lg:h-[602px] w-[400px] h-[380px] absolute z-10 lg:right-6 lg:top-0 -top-4 translate-x-1/2 object-contain md:translate-x-0"
      />
    </section>
  );
};

export default Hero;

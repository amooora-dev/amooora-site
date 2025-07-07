import heroImg from "../../../assets/images/amooora-trim-logo.png";
import { cn } from "../../utils/cn";

const Hero = () => {
  return (
    <section
      id='hero'
      className={cn(
        "bg-[url(../../../assets/images/amooora-hero.webp)] w-full bg-cover bg-center bg-scroll relative py-20 px-4"
      )}
    >
      <div className='container flex flex-col mx-auto items-center justify-center h-full'>
        <img
          src={heroImg}
          alt='hero-image'
          width={526}
          height={389}
          className='max-w-full h-auto'
        />
        <p className='mt-5 text-center !text-[0.85rem] leading-none text-shadow-2xs text-shadow-white w-45 md:w-full md:text-shadow-none font-normal tracking-[0.5px] uppercase lg:text-[0.85rem]'>
          Um mundo inteiro de acolhimento e liberdade
        </p>
      </div>
    </section>
  );
};

export default Hero;

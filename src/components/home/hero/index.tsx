import Image from "next/image";

import heroImg from "@/assets/images/amooora-trim-logo.png";
import { cn } from "@/utils/cn";
import s from "./hero.module.css";

const Hero = () => {
  return (
    <section
      id='hero'
      className={cn(
        "w-full bg-cover bg-center bg-fixed bg-no-repeat relative py-26 px-4",
        s.hero
      )}
    >
      <div className='container flex flex-col mx-auto items-center justify-center h-full'>
        <Image
          src={heroImg}
          alt='hero-image'
          width={526}
          height={389}
          className='max-w-full h-auto'
        />
        <p className='mt-5 text-center !text-[0.85rem] leading-none text-zinc-800 dark:text-zinc-800 text-shadow-2xs text-shadow-white w-45 md:w-full md:text-shadow-none font-normal tracking-[0.5px] uppercase lg:text-[0.85rem]'>
          Um mundo inteiro de acolhimento e liberdade
        </p>
      </div>
    </section>
  );
};

export default Hero;

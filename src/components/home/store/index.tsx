import Image from "next/image";

import products from "@/assets/images/amooora-produtos.png";

import { cn } from "@/utils/cn";

const Store = () => {
  return (
    <section id='produtos' className='px-3 py-4'>
      <div className='container flex flex-col items-center justify-center mx-auto'>
        <div className='w-full md:max-w-[650px] mb-6'>
          <h2
            className={cn(
              "text-[2.3rem] font-bold tracking-[-0.5px] mb-3 text-center title"
            )}
          >
            Loja Amooora
          </h2>
          <p className={cn("mb-2 font-semibold text-center")}>
            Em breve nova loja da Amooora com produtos incríveis para você
            desfilar sua identidade sáfica com muito mais orgulho.
          </p>
        </div>
        <Image
          className='max-w-full'
          src={products}
          width={624}
          height={463}
          alt='produtos'
        />
      </div>
    </section>
  );
};

export default Store;

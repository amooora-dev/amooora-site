"use client";
import { cn } from "@/utils/cn";

const Newsletter = () => {
  return (
    <section id='newsletter-1' className='py-4 px-3'>
      <div className='container mx-auto flex items-center justify-center flex-col md:flex-row'>
        <h4
          className={cn(
            "text-[1.5rem] font-bold tracking-[-0.5px] mb-3 w-full md:w-[40%] title"
          )}
        >
          Cadastre o seu email para saber as novidades em primeira mão!
        </h4>
        <form className='flex gap-2 w-full md:w-[50%] items-center flex-col md:flex-row'>
          <input
            type='email'
            className={cn(
              "grow py-2 px-1 rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/12 focus:border-primary w-full border-slate-300placeholder:text-slate-500 dark:border-slate-600 dark:placeholder:text-slate-400"
            )}
            placeholder='Seu melhor email'
            required
            id='s-email'
          />
          <button
            type='submit'
            className='bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:opacity-80 transition-colors duration-300 text-nowrap uppercase font-semibold text-center cursor-pointer w-full md:w-fit'
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

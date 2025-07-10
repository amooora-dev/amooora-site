import { cn } from "../../utils/cn";
import { useTheme } from "../../utils/useTheme";

const Newsletter = () => {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <section id='newsletter-1' className='py-4 px-3'>
      <div className='container mx-auto flex items-center justify-center flex-col md:flex-row'>
        <h4
          className={cn(
            "text-[1.5rem] font-bold tracking-[-0.5px] mb-3 w-full md:w-[40%]",
            isLightTheme ? "text-slate-800" : "text-slate-200"
          )}
        >
          Cadastre o seu email para saber as novidades em primeira mão!
        </h4>
        <form className='flex gap-2 w-full md:w-[50%] items-center flex-col md:flex-row'>
          <input
            type='email'
            autocomplete='off'
            className={cn(
              "grow py-2 px-1 rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#932d6f]/12 focus:border-[#932d6f] w-full",
              isLightTheme
                ? "border-slate-300 text-slate-800 placeholder:text-slate-500"
                : "border-slate-600 text-slate-200 placeholder:text-slate-400"
            )}
            placeholder='Seu melhor email'
            required
            id='s-email'
          />
          <button
            type='submit'
            className='bg-[#932d6f] text-white px-4 py-2 rounded-lg shadow-md hover:opacity-80 transition-colors duration-300 text-nowrap uppercase font-semibold text-center cursor-pointer w-full md:w-fit'
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

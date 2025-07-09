import pessoas from "../../../assets/images/pessoas_roxo.jpg";
import { cn } from "../../utils/cn";
import { useTheme } from "../../utils/useTheme";

const buttons = [
  {
    href: "#saude",
    label: "Saúde",
  },
  {
    href: "#eventos",
    label: "Eventos",
  },
  {
    href: "#aplicativo",
    label: "Aplicativo",
  },
  {
    href: "#servicos",
    label: "Serviços",
  },
  {
    href: "#estabelecimentos",
    label: "Estabelecimentos",
  },
  {
    href: "#comunidades",
    label: "Comunidades",
  },
];

const AppIntro = () => {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <section id='aplicativo' className='py-10 px-3 md:px-0'>
      <div className='container flex flex-col items-center justify-between gap-8 md:flex-row mx-auto relative'>
        <div className='self-stretch min-w-[40%] w-[400px] md:static absolute left-0 top-0 opacity-40 md:opacity-100 max-w-full flex justify-center items-center'>
          <img
            src={pessoas}
            alt='brejo'
            className='rounded-lg shadow-lg'
            width={388}
            height={436}
          />
        </div>
        <div className='grow flex flex-col items-start max-w-[750px] z-10'>
          <p
            className={cn(
              "uppercase font-bold text-[0.85rem] mb-2",
              isLightTheme ? "text-gray-700" : "text-gray-300"
            )}
          >
            UM APLICATIVO SÁFICO
          </p>
          <h2
            className={cn(
              "text-[2.5rem] font-bold tracking-[-0.5px] mb-3",
              isLightTheme ? "text-slate-800" : "text-slate-200"
            )}
          >
            Mi brejo, su brejo
          </h2>
          <p
            className={cn(
              "mb-2 font-semibold",
              isLightTheme ? "text-slate-700" : "text-slate-200"
            )}
          >
            A gente quer se encontrar, trocar e se reconhecer. Criamos um espaço
            seguro, afetuoso e com a nossa cara para reunir toda a comunidade
            sáfica.
          </p>
          <p
            className={cn(
              "mb-2 font-semibold",
              isLightTheme ? "text-slate-700" : "text-slate-200"
            )}
          >
            Mais do que visibilidade, a gente quer construir conexões. Trocas
            reais. Entretenimento, informação útil, apoio psicológico, saúde
            íntima, orientação jurídica, e muito mais.
          </p>
          <p
            className={cn(
              "mb-2 font-semibold",
              isLightTheme ? "text-slate-700" : "text-slate-200"
            )}
          >
            As conexões aqui vão além do virtual! O virtual é a porta de
            entrada, mas incentivamos as conexões no mundo real. Ou seja, o olho
            no olho, o toque na pele e a conversa ao pé de uma mesa sem hora
            para acabar!
          </p>
          <p
            className={cn(
              "mb-2 font-semibold",
              isLightTheme ? "text-slate-700" : "text-slate-200"
            )}
          >
            Porque existem muitos brejos, e sempre vai ter um com a sua cara. A
            Amooora oferece:
          </p>

          <div className='flex flex-wrap items-center justify-center mt-4 mx-auto'>
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className='bg-[#932d6f] text-white px-4 py-2 rounded-lg shadow-md hover:opacity-80 transition-colors duration-300 mr-2 mb-2 w-[200px] uppercase font-semibold text-center'
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppIntro;

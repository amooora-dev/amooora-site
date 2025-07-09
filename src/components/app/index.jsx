import pessoas from "../../../assets/images/pessoas_roxo.jpg";
import Content from "../content";

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

const paragraphs = [
  `A gente quer se encontrar, trocar e se reconhecer. Criamos um espaço
            seguro, afetuoso e com a nossa cara para reunir toda a comunidade
            sáfica.`,
  `Mais do que visibilidade, a gente quer construir conexões. Trocas
            reais. Entretenimento, informação útil, apoio psicológico, saúde
            íntima, orientação jurídica, e muito mais.`,
  `As conexões aqui vão além do virtual! O virtual é a porta de
            entrada, mas incentivamos as conexões no mundo real. Ou seja, o olho
            no olho, o toque na pele e a conversa ao pé de uma mesa sem hora
            para acabar!`,
  `Porque existem muitos brejos, e sempre vai ter um com a sua cara. A
            Amooora oferece:`,
];

const AppIntro = () => {
  return (
    <Content
      id='aplicativo'
      upperTitle='UM APLICATIVO SÁFICO'
      title='Mi brejo, su brejo'
      paragraphs={paragraphs}
      isImgLeft
      img={{
        src: pessoas,
        alt: "brejo",
        width: 388,
        height: 436,
      }}
      extraContent={
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
      }
    />
  );
};

export default AppIntro;

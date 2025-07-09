import { cn } from "../../utils/cn";
import { useTheme } from "../../utils/useTheme";
import FaqItem from "./faqItem";

const questions = [
  {
    question: "A Amooora é uma rede social?",
    answer: `Não exatamente. A Amooora é uma plataforma comunitária
                      feita por e para a comunidade sáfica. Aqui, você encontra
                      conexões, serviços, informações e acolhimento — tudo pensado
                      para fortalecer a nossa existência coletiva.`,
  },
  {
    question: "Qual é o público da Amooora?",
    answer: (
      <>
        A Amooora é{" "}
        <strong>prioritariamente voltada para a comunidade sáfica</strong>
        <br /> — mulheres lésbicas, bissexuais, pansexuais, pessoas trans e não
        binárias que se relacionam com outras identidades femininas. Se você se
        reconhece nesse espaço, ele também é seu.
      </>
    ),
  },
  {
    question: "Homens cis são bem-vindos na plataforma?",
    answer: `A Amooora é um espaço seguro e afetivo construído especificamente
                      para pessoas sáficas. Homens cis não fazem parte do público-alvo da
                      plataforma e não podem se cadastrar.`,
  },
  {
    question: "Mulheres heteros são bem-vindas na plataforma?",
    answer: `Em um primeiro momento, a Amooora é voltada apenas para comunidade sáfica.
                      Mas em breve abriremos nosso portal de serviços para que mulheres héteros
                      possam acessar nosso catálogo.`,
  },
  {
    question: "A Amooora é um app de namoro?",
    answer: `Você quer namorar alguém? A Amooora possibilita matches, mas a nossa
                      proposta vai além de um app de encontros.
                      Sugerimos lugares seguros para encontros,
                      conteúdos educativos que proporcionam uma vida sexual saudável e segura,
                      e espaços de escuta e pertencimento.`,
  },
  {
    question: "É seguro usar a Amooora?",
    answer: `Sim. Segurança é um valor inegociável para nós.
                      Cuidamos da proteção de dados, investimos em ferramentas
                      de moderação e criamos ambientes de interação pensados para
                      minimizar riscos e violências digitais.`,
  },
  {
    question: "Preciso pagar para usar a plataforma?",
    answer: `Não. É só chegar! Mas teremos alguns serviços que só
                      poderão ser acessados mediante assinatura.`,
  },
  {
    question: "Posso divulgar meus serviços na plataforma?",
    answer: `Sim! A Amooora conta com um espaço onde é possível divulgar seus trabalhos,
                      avaliar experiências e contratar com segurança dentro da comunidade.`,
  },
];

const Faq = () => {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <section id='faq' className='px-3 py-4'>
      <div className='container mx-auto p-4'>
        <div className='mb-5'>
          <h2
            className={cn(
              "text-[2.3rem] font-bold tracking-[-0.5px] mb-3 text-center",
              isLightTheme ? "text-slate-800" : "text-slate-200"
            )}
          >
            Perguntas & Respostas
          </h2>
          <p
            className={cn(
              "mb-2 font-semibold text-center",
              isLightTheme ? "text-slate-700" : "text-slate-300"
            )}
          >
            Ficou com alguma dúvida? Veja as perguntas mais frequentes sobre a
            Amooora.
          </p>
        </div>
        <div>
          {questions.map((item, index) => (
            <FaqItem
              item={index + 1}
              question={item.question}
              answer={item.answer}
              key={index}
            />
          ))}
        </div>

          <p className='mt-10 bg-slate-200 w-fit mx-auto px-10 py-4 rounded-full text-center text-slate-600'>
            Ainda tem dúvidas? <br />
            <a href='mailto:amooora@amooora.com.br' className='text-[#932D6F] font-bold underline'>
              Envie sua dúvida pra gente
            </a>
          </p>
      </div>
    </section>
  );
};

export default Faq;

const values = [
  {
    title: "Segurança é essencial, não opcional",
    description:
      "Cada decisão na Amooora parte do nosso compromisso com a segurança. Cuidamos para que a plataforma seja um espaço protegido, onde seja possível navegar, se expressar e se relacionar com tranquilidade e confiança.",
  },
  {
    title: "Representatividade com verdade",
    description:
      "Nossos conteúdos, funcionalidades e serviços refletem as vozes, os corpos e as histórias da comunidade sáfica. Valorizamos a pluralidade das nossas vivências e rejeitamos qualquer forma de apagamento.",
  },
  {
    title: "Liberdade para ser e amar",
    description:
      "Acreditamos que o amor sáfico é legítimo, belo e político. Defendemos o direito de cada pessoa viver sua identidade e seus afetos de forma plena, sem medo ou censura.",
  },
  {
    title: "Conexões com propósito",
    description:
      "Amooora é rede. Facilitamos encontros reais e significativos — sejam pessoais, profissionais ou coletivos — baseados no respeito e no cuidado mútuo.",
  },
  {
    title: "Saúde íntima é cuidado e autonomia",
    description:
      "Falamos sobre saúde íntima como um ato de autocuidado e empoderamento. Oferecemos informações de qualidade and access to services that respect the bodies, desires, and realities of the sáfica community.",
  },
  {
    title: "Economia do cuidado e da confiança",
    description:
      "Incentivamos a circulação de saberes, serviços e talentos dentro da própria comunidade. Aqui, a comunidade sáfica pode oferecer e acessar apoio jurídico, de saúde, psicológico, criativo e técnico com confiança e empatia.",
  },
  {
    title: "Construção coletiva",
    description:
      "Valorizamos escuta ativa, participação e autonomia como formas de construir colaborativamente o futuro que queremos viver.",
  },
];

const Values = () => {
  return (
    <section id='valores' className='px-4 py-4'>
      <div className='container rounded-3xl mx-auto p-2 bg-[#F1A890]'>
        <h2 className='text-[2.3rem] font-bold text-center text-slate-800'>
          Nossos Valores
        </h2>
        <div className='grid gap-4 md:grid-cols-2 grid-cols-1 mt-4'>
          {values.map((v, i) => (
            <div key={i} className='w-full'>
              <h5 className='text-[1.3rem] font-bold mb-3 text-slate-800'>
                {i + 1}. {v.title}
              </h5>
              <p className='text-slate-800'>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

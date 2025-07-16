import apoia from "@/assets/images/apoooia_site.jpg";

import Content from "../content";

const paragraphs = [
  "Nós somos Amooora.",
  `Nascemos da urgência e do desejo de construir um mundo onde a
            comunidade sáfica — mulheres lésbicas, bissexuais, pansexuais,
            pessoas trans e não binárias que se relacionam com outras
            identidades femininas — possa se sentir livre, segura e pertencente.`,
  `Somos uma plataforma feita por nós, para nós — um espaço onde
            existências plurais não apenas cabem, mas são celebradas, validadas
            e conectadas.`,
  `A Amooora é mais do que uma plataforma online! É a resposta a um
              vazio histórico de visibilidade, cuidado e recursos voltados para a
              comunidade sáfica.`,
  `É onde você pode ser quem é — sem medo, sem julgamentos, com
            acolhimento.`,
  `É onde a gente se encontra para existir com coragem, afeto e em todo
            o nosso potencial.`,
];

const Manifesto = () => {
  return (
    <Content
      id='manifesto'
      upperTitle='UM SONHO, UM IDEAL'
      title='Manifesto'
      paragraphs={paragraphs}
      img={{
        src: apoia,
        alt: "Amooora Manifesto",
        width: 388,
        height: 436,
      }}
    />
  );
};

export default Manifesto;

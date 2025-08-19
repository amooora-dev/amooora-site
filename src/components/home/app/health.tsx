import astro from "@/assets/images/1_colagem_astro.jpg";
import Content from "../content";

const paragraphs = [
  `Informação é cuidado. Vamos falar de saúde?`,
  `Falamos sem rodeios sobre saúde íntima, uma pauta muitas vezes negligenciada na comunidade sáfica, mas que merece atenção, acolhimento e troca segura.`,
  `Quer sabe sobre prazer? Prevenção de ISTs? Ou qualquer outro conteúdo relacionado à educação sexual e saúde intíma? Este espaço é para você se informar, se escutar e se sentir bem no seu corpo. Porque saúde íntima é direito, não tabu.`,
];

const Health = ({ isImgLeft = false }) => {
  return (
    <Content
      isImgLeft={isImgLeft}
      img={{
        src: astro,
        alt: "brejo",
        width: 521,
        height: 293,
      }}
      upperTitle='SAÚDE ÍNTIMA NÃO É TABU'
      title='Saúde Íntima'
      paragraphs={paragraphs}
    />
  );
};

export default Health;

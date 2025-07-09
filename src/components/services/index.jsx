import services from "../../../assets/images/2_servicos.jpg";
import Content from "../content";

const paragraphs = [
  <>
    <strong>Prestadora de serviço?</strong>
    <br />É uma lésbica que oferece serviços de pequenos reparos residências? É
    uma pessoa não binária que oferece serviços gráficos? Se é alguém da nossa
    comunidade que quer ofertar serviços profissionais, conte conosco. A Amooora
    quer te ajudar a publicitar os seus serviços. Somos uma por todas e todas
    por uma!
  </>,
  <>
    <strong>Quer contratar sáficas capacitadas?</strong>
    <br />
    Procurando ginecologista, psicóloga ou uma sáfica descolada para pregar um
    quadro na sua parede? Nós temos a solução! Acesse o catálogo de serviços
    oferecidos pela nossa comunidade e deixe a sua avaliação. Juntas vamos
    fomentar a economia sáfica e trazer qualidade e segurança para a comunidade.
  </>,
];

const Services = () => {
  return (
    <Content
      id='servicos'
      upperTitle='QUALIDADE E SEGURANÇA'
      title='Serviços'
      paragraphs={paragraphs}
      img={{
        src: services,
        alt: "serviços",
        width: 451,
        height: 254,
      }}
    />
  );
};

export default Services;

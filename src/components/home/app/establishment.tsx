import contato from "@/assets/images/contato.jpg";
import Content from "../content";

const paragraphs = [
  <>
    <strong>Tem um estabelecimento que é a nossa cara?</strong>
    <br />É um barzinho, um restaurante, uma loja de bicicleta ou qualquer
    estabelecimento simpatizante à nossa causa? Corre aqui e faça um perfil de
    seu espaço na nossa plataforma! Queremos promover estabelecimentos onde a
    comunidade sáfica se sinta segura e acolhida para ser quem é e amar quem
    quiser!
  </>,
  <>
    <strong>Quer encontrar locais seguros e acolhedores?</strong>
    <br />
    Procurando locais onde se sinta bem vinda e acolhida e ainda de quebra se
    divertir? A Amooora é o lugar certo para você! Aqui você encontra
    estabelecimentos inclusivos e avaliados pela nossa comunidade.
  </>,
];

const Establishment = () => {
  return (
    <Content
      img={{
        src: contato,
        alt: "contato",
        width: 451,
        height: 254,
      }}
      upperTitle='LOCAIS SEGUROS'
      id='estabelecimentos'
      title='Estabelecimentos'
      paragraphs={paragraphs}
    />
  );
};

export default Establishment;

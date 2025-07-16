import suporte from "@/assets/images/3_colagem_suporte.jpg";
import Content from "../content";

const paragraphs = [
  <>
    <strong>O que tem para hoje?</strong>
    <br />
    Encontre os rolês mais legais perto de você com a agenda da Amooora: festas,
    shows, palestras, workshops, encontros esportivos e muito mais. Se é bom e é
    para gente, tá aqui.
  </>,
  <>
    <strong>Quer divulgar um evento?</strong>
    <br />
    Tem um evento do seu projeto ou empresa? Cadastre aqui e espalhe para
    comunidade! Um espaço feito para promover o que importa para o nosso
    público, do jeitinho que a gente gosta.
  </>,
];

const Events = () => {
  return (
    <Content
      img={{
        src: suporte,
        alt: "brejo",
        width: 451,
        height: 254,
      }}
      isImgLeft
      upperTitle='VEM PRO ROLÊ'
      title='Eventos'
      paragraphs={paragraphs}
    />
  );
};

export default Events;

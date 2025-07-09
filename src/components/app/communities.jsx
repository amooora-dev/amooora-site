import amoras from "../../../assets/images/amoras.jpg";
import Content from "../content";

const paragraphs = [
  `Aqui a gente fala de tudo:
                    do crush ao drama da mãe do pet gourmet comedor de cocô.
                    Sempre tem um cantinho com a sua cara!
                    Tem amor sáfico, astrologia, cuidados com a saúde, literatura queer,
                    jogos e até o clássico "não sei o que tô fazendo, mas tamo junta".
                    Faça parte dos nossos grupos!`,
];

const Communities = () => {
  return (
    <Content
      img={{
        src: amoras,
        alt: "brejo",
        width: 451,
        height: 254,
      }}
      upperTitle='UM CANTINHO COM A SUA CARA'
      title='Comunidades'
      paragraphs={paragraphs}
      isImgLeft
    />
  );
};

export default Communities;

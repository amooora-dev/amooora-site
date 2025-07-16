import relacionamento from "@/assets/images/1_colagem_relacio.jpg";
import Content from "../content";

const paragraphs = [
  "Pode ser um crush, uma amizade de rolê, uma parceria de projeto ou tudo isso junto.",
  "No nosso mapa, você encontra gente que vibra como você, para dar match nas ideias, nas conversas, nos sonhos (e quem sabe nos beijos também).",
  "Conexões reais, espontâneas e cheias de potencial. Bora descobrir quem tá por perto?",
];

const Connections = () => {
  return (
    <Content
      id='conexoes'
      upperTitle='CONEXÕES REAIS'
      title='Conexões'
      paragraphs={paragraphs}
      img={{
        src: relacionamento,
        alt: "Conexões Reais",
        width: 451,
        height: 254,
      }}
    />
  );
};

export default Connections;

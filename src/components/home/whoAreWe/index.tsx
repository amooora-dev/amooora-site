"use client";
import Image from "next/image";
import { useState } from "react";
import Slider, { Settings } from "react-slick";

import andrea from "@/assets/images/profile-pics/andrea.jpg";
import camila from "@/assets/images/profile-pics/camila.jpg";
import clarissa from "@/assets/images/profile-pics/clarissa-rocha.jpg";
import debora from "@/assets/images/profile-pics/debora.jpg";
import fran from "@/assets/images/profile-pics/fran.jpg";
import isabela from "@/assets/images/profile-pics/isabela.jpg";
import mairaRo from "@/assets/images/profile-pics/maira-rossetti.jpg";
import nina from "@/assets/images/profile-pics/nina.jpg";
import sol from "@/assets/images/profile-pics/sol.jpg";

import { cn } from "@/utils/cn";

const us = [
  {
    name: "🌈 Nina",
    job: "CEO & fundadora",
    description: (
      <>
        Lésbica, sonhadora e estrategista do afeto.
        <br />
        Acredita que amar outras mulheres é um ato político — e que um mundo
        melhor começa com mais segurança, alegria e espaço para gente ser quem
        é.
        <br />
        Lidera a Amooora com o mesmo compromisso que tem com seus dates:
        planejamento impecável e zero enrolação.
      </>
    ),
    img: {
      src: nina,
      alt: "Nina, CEO & fundadora da Amooora",
    },
  },
  {
    name: "💸 Solange",
    job: "CFO, ou “Controla Finanças com Orgulho”",
    description: (
      <>
        Simpatizante.
        <br />
        Garante que a Amooora siga viva, pulsante e com boleto em dia.
        <br />
        Porque até revolução precisa de quem fecha a conta e abre caminhos.
      </>
    ),
    img: {
      src: sol,
      alt: "Solange, CFO da Amooora",
    },
  },
  {
    name: "🧬 Clarissa",
    job: "Cientista oficial da saúde íntima",
    description: (
      <>
        Lésbica e sem papas na língua (nem no útero).
        <br />
        Estuda com rigor, mas entrega com carinho — tipo um date bom.
        <br />
        Defende que informação de qualidade também é cuidado.
      </>
    ),
    img: {
      src: clarissa,
      alt: "Clarissa, cientista oficial da saúde íntima da Amooora",
    },
  },
  {
    name: "🎨 Maira",
    job: "Design & UX",
    description: (
      <>
        Lésbica nata, fada sensata do Figma e militante do espaçamento perfeito.
        <br />
        Transforma cuidado em layout e faz da navegação um abraço visual.
        <br />
        Cada botão aqui tem propósito — e glitter invisível.
      </>
    ),
    img: {
      src: "https://picsum.photos/200",
      alt: "Maira, design & UX da Amooora",
    },
  },
  {
    name: "📸 Isabela",
    job: "Audiovisual & close certo",
    description: (
      <>
        Lésbica, artista e cheia de closes certeiros.
        <br />
        Capta o close, a lágrima, o riso e a crush sem precisar de filtro.
      </>
    ),
    img: {
      src: isabela,
      alt: "Isabela, audiovisual da Amooora",
    },
  },
  {
    name: "📣 Francielle",
    job: "Comunicação & papo reto com sotaque afetuoso",
    description: (
      <>
        Lésbica, preta e tagarela com PhD em palavras que abraçam.
        <br />
        Cuida da linguagem como quem cuida de gente.
        <br />
        Para ela, comunicação boa é aquela que dá match com o coração.
      </>
    ),
    img: {
      src: fran,
      alt: "Francielle, comunicação da Amooora",
    },
  },
  {
    name: "💻 Camila Monteiro",
    job: "Desenvolvedora raíz",
    description: (
      <>
        Aliada e a favor da causa, faz parte do time de tecnologia.
        <br />
        Como boa nerd é introspectiva.
        <br />
        Mas acredita que tem muito para contribuir pro grupo e para as mulheres.
      </>
    ),
    img: {
      src: camila,
      alt: "Camila Monteiro, desenvolvedora da Amooora",
    },
  },
  {
    name: "💻 Carol Pontara",
    job: "Desenvolvedora para toda obra",
    description: (
      <>
        Transforma café em código e ideias em interfaces incríveis.
        <br />
        Especialista em criar experiências que unem tecnologia e afeto.
        <br />
        Acredita que design e código podem construir espaços mais inclusivos.
      </>
    ),
    img: {
      src: "https://picsum.photos/200",
      alt: "Carol Pontara, desenvolvedora da Amooora",
    },
  },
  {
    name: "💻 Débora",
    job: "Dev & Detetive do Código",
    description: (
      <>
        Bissexual, curiosa e movida a &quot;e se?&quot;.
        <br />
        Descobriu no código uma forma de transformar ideias em ação.
        <br />
        Entre deploys e cafés, entrega mais que solução: entrega intenção.
        <br />
        Pra ela, código bom é como date bom: claro, funcional e sem prometer
        demais.
      </>
    ),
    img: {
      src: debora,
      alt: "Débora, desenvolvedora da Amooora",
    },
  },
  {
    name: "👩‍💻 Andrea",
    job: "",
    description: <></>,
    img: {
      src: andrea,
      alt: "Andrea",
    },
  },
  {
    name: "👩‍💻 Maira Rossetti",
    job: "",
    description: <></>,
    img: {
      src: mairaRo,
      alt: "Maira Rossetti",
    },
  },
];

const WhoAreWe = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setActiveIndex(index),
    customPaging: (i) => (
      <div
        className={cn(
          "rounded-full w-3 h-3 hover:opacity-80",
          i === activeIndex
            ? "border-2 border-[#dca0c8] bg-[#932d6f]"
            : "bg-[#DCA0C8]"
        )}
      >
        &nbsp;
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <section id='quem-somos' className='py-4 px-3'>
      <div className='container bg-[#932D6F] mx-auto rounded-3xl px-2 pt-2 pb-8'>
        <h2 className='text-[2.3rem] font-bold text-center text-slate-200'>
          Quem faz a Amooora?
        </h2>
        <div className='mt-8 max-w-[90%] mx-auto'>
          <Slider {...settings}>
            {us.map((person, index) => (
              <div key={index}>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4 mb-8 sm:mb-4'>
                  <Image
                    src={person.img.src || "https://picsum.photos/300"}
                    alt={person.img?.alt || `${person.name} profile`}
                    className='w-60 h-60 object-cover rounded shadow'
                    width={300}
                    height={300}
                  />
                  <div className='md:max-w-[500px] h-full flex flex-col justify-between'>
                    <h3 className='text-[1.5rem] text-slate-100 font-bold'>
                      {person.name}
                    </h3>
                    <p className='text-[1.3rem] text-slate-100'>{person.job}</p>
                    <p className='text-slate-200'>{person.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;

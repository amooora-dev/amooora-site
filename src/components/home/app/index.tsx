"use client";
import { useState } from "react";

import pessoas from "@/assets/images/pessoas_roxo.jpg";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Content from "../content";
import Communities from "./communities";
import Connections from "./connections";
import Establishment from "./establishment";
import Events from "./events";
import Health from "./health";
import Services from "./service";

const buttons = [
  {
    id: "saude",
    label: "Saúde",
  },
  {
    id: "eventos",
    label: "Eventos",
  },
  {
    id: "conexoes",
    label: "Conexões",
  },
  {
    id: "servicos",
    label: "Serviços",
  },
  {
    id: "estabelecimentos",
    label: "Estabelecimentos",
  },
  {
    id: "comunidades",
    label: "Comunidades",
  },
];

const components = [
  { id: "saude", comp: <Health /> },
  { id: "eventos", comp: <Events isImgLeft /> },
  { id: "conexoes", comp: <Connections /> },
  { id: "servicos", comp: <Services isImgLeft /> },
  { id: "estabelecimentos", comp: <Establishment /> },
  { id: "comunidades", comp: <Communities isImgLeft /> },
];

const features = [
  { name: "Saúde", href: "#saude" },
  { name: "Eventos", href: "#eventos" },
  { name: "Conexões", href: "#conexoes" },
  { name: "Serviços", href: "#servicos" },
  { name: "Estabelecimentos", href: "#estabelecimentos" },
  { name: "Comunidades", href: "#comunidades" },
];

const paragraphs = [
  `A gente quer se encontrar, trocar e se reconhecer. Criamos um espaço
            seguro, afetuoso e com a nossa cara para reunir toda a comunidade
            sáfica.`,
  `Mais do que visibilidade, a gente quer construir conexões. Trocas
            reais. Entretenimento, informação útil, apoio psicológico, saúde
            íntima, orientação jurídica, e muito mais.`,
  `As conexões aqui vão além do virtual! O virtual é a porta de
            entrada, mas incentivamos as conexões no mundo real. Ou seja, o olho
            no olho, o toque na pele e a conversa ao pé de uma mesa sem hora
            para acabar!`,
  `Porque existem muitos brejos, e sempre vai ter um com a sua cara. A
            Amooora oferece:`,
];

const AppIntro = () => {
  const [active, setActive] = useState(components[0]);

  const params = useSearchParams();

  if (params.get("variant")) {
    return (
      <>
        <Content
          id='aplicativo'
          upperTitle='UM APLICATIVO SÁFICO'
          title='Mi brejo, su brejo'
          paragraphs={paragraphs}
          isImgLeft
          img={{
            src: pessoas,
            alt: "brejo",
            width: 388,
            height: 436,
          }}
        />
        <div>
          <div className='flex flex-wrap items-center justify-center mt-4 mx-auto max-w-[650px]' id="btn-container">
            {buttons.map((button, index) => (
              <button
                key={index}
                className='bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:opacity-80 transition-colors duration-300 mr-2 mb-2 w-[200px] uppercase font-semibold text-center cursor-pointer'
                onClick={() => {
                  const comp = components.find((c) => c.id === button.id);
                  if (comp) {
                    setActive(comp);
                  }
                  const content = document.getElementById("btn-container");
                  const header = document.querySelector("header");
                  const headerHeight = header ? header.offsetHeight : 0;
                  if (content) {
                    const contentTop =
                      content.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: contentTop - headerHeight,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {button.label}
              </button>
            ))}
          </div>
          <div id='app-content'>{active.comp}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Content
        id='aplicativo'
        upperTitle='UM APLICATIVO SÁFICO'
        title='Mi brejo, su brejo'
        paragraphs={paragraphs}
        isImgLeft
        img={{
          src: pessoas,
          alt: "brejo",
          width: 388,
          height: 436,
        }}
        extraContent={
          <ul className='pl-5 mt-4 flex flex-wrap gap-2'>
            {features.map((feature) => (
              <li
                key={feature.href}
                className='flex items-center gap-2 w-full md:w-[25%] font-semibold'
              >
                <Link
                  href={feature.href}
                  className="flex items-center gap-2 underline text-lg hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const content = document.getElementById(
                      feature.href.replace("#", "")
                    );
                    const header = document.querySelector("header");
                    const headerHeight = header ? header.offsetHeight : 0;
                    if (content) {
                      const contentTop =
                        content.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({
                        top: contentTop - headerHeight,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <ChevronRight className='text-primary dark:text-primary-light' />
                  {feature.name}
                </Link>
              </li>
            ))}
          </ul>
        }
      />
      <div>
        {components.map(({ id, comp }) => (
          <div key={id} id={id}>
            {comp}
          </div>
        ))}
      </div>
    </>
  );
};

export default AppIntro;

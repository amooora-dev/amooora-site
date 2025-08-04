"use client";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import logoBranco from "@/assets/images/logo-branco.png";
import logoVioleta from "@/assets/images/logo-violeta.png";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";

const links = [
  { href: "#manifesto", text: "Manifesto" },
  { href: "#aplicativo", text: "Aplicativo" },
  { href: "#valores", text: "Nossos valores" },
  { href: "#produtos", text: "Loja" },
  { href: "#faq", text: "FAQ" },
  { href: "#quem-somo", text: "Quem somos" },
];

const Footer = () => {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <footer className={cn("pt-8 px-4")}>
      <div
        className={cn(
          "container border-t mx-auto py-8 flex flex-col gap-4 border-[#932D6F]/20 text-slate-800 dark:border-[#932D6F]/50 dark:text-slate-200"
        )}
      >
        <div className='flex w-full flex-col md:flex-row items-start md:items-stretch justify-between gap-8'>
          <div className='flex items-start md:items-center justify-center'>
            <Image
              src={isLightTheme ? logoVioleta : logoBranco}
              alt='Logo Amooora'
              width={160}
              height={63}
            />
          </div>
          <div className='flex flex-col md:flex-row md:justify-around md:items-center grow'>
            {links.map(({ href, text }, i) => (
              <a href={href} key={i} className='hover:underline'>
                {text}
              </a>
            ))}
          </div>
        </div>
        <div className='flex items-start md:items-center gap-4 flex-col md:flex-row'>
          <a
            href='mailto:amooora@amooora.com.br'
            className='underline md:no-underline md:hover:underline'
          >
            amooora@amooora.com.br
          </a>

          <Link
            href='https://instagram.com/n.amooora'
            className='flex gap-1 underline md:no-underline md:hover:underline'
          >
            <Instagram />
            <span>@n.amooora</span>
          </Link>
        </div>
        <div
          className={cn(
            "flex gap-4 md:gap-8 flex-col md:flex-row md:items-center text-slate-800 dark:text-slate-200"
          )}
        >
          <p className='flex flex-col'>
            <span className='font-semibold'>&copy; 2025 Amooora.</span>{" "}
            <span>Todos os direitos reservados</span>
          </p>
          <Link
            href='/privacy'
            className='underline md:no-underline md:hover:underline'
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

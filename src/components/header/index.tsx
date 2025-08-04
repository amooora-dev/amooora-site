"use client";
import { Menu as MenuIcon, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logoBranco from "@/assets/images/logo-branco.png";
import logoRoxo from "@/assets/images/logo-roxa-amoooora.png";
import logoVioleta from "@/assets/images/logo-violeta.png";
import logoColor from "@/assets/images/logo.color.png";

import { cn } from "@/utils/cn";
import useMobile from "@/utils/useMobile";
import Menu from "./menu";

const Header = () => {
  const isMobile = useMobile();
  const { theme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const isLightTheme = theme === "light";

  if (isMobile) {
    return (
      <header
        id='inicio'
        className={cn("w-full shadow shadow-gray-800/8 bg-white dark:bg-zinc-900 dark:shadow-white/8")}
      >
        <div
          className={cn(
            "relative container mx-auto w-full flex items-center p-4",
            showMenu &&
              "transform -translate-x-[80%] transition-transform duration-300"
          )}
        >
          <Image
            src={isLightTheme ? logoVioleta : logoBranco}
            alt='Logo Amooora'
            width={160}
            height={63}
          />
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={cn("text-black dark:text-white ml-auto")}
          >
            {showMenu ? <X /> : <MenuIcon />}
          </button>
        </div>
        <Menu show={showMenu} setShow={setShowMenu} />
      </header>
    );
  }

  return (
    <header
      id='inicio'
      className={cn(
        "w-full shadow sticky top-0 z-50 shadow-gray-800/8 bg-white dark:shadow-white/8 dark:bg-zinc-900"
      )}
    >
      <div
        className={cn(
          "container mx-auto w-full flex justify-between items-center"
        )}
      >
        <Link href='/'>
          <Image
            src={isLightTheme ? logoColor : logoRoxo}
            alt='Logo Amooora'
            width={80}
            height={80}
          />
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;

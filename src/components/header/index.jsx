import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

import logoBranco from "../../../assets/images/logo-branco.png";
import logoRoxo from "../../../assets/images/logo-roxa-amoooora.png";
import logoVioleta from "../../../assets/images/logo-violeta.png";
import logoColor from "../../../assets/images/logo.color.png";

import { cn } from "../../utils/cn";
import useMobile from "../../utils/useMobile";
import { useTheme } from "../../utils/useTheme";
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
        className={cn(
          "w-full shadow",
          isLightTheme ? "shadow-gray-800/8" : "shadow-white/8"
        )}
      >
        <div
          className={cn(
            "relative container mx-auto w-full flex items-center p-4",
            showMenu &&
              "transform -translate-x-[80%] transition-transform duration-300"
          )}
        >
          <img
            src={isLightTheme ? logoVioleta : logoBranco}
            alt='Logo Amooora'
            width={160}
            height={63}
          />
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={cn(
              isLightTheme ? "text-black" : "text-white",
              "ml-auto"
            )}
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
        "w-full shadow sticky top-0 z-50",
        isLightTheme
          ? "shadow-gray-800/8 bg-white"
          : "shadow-white/8 bg-zinc-900"
      )}
    >
      <div
        className={cn(
          "container mx-auto w-full flex justify-between items-center"
        )}
      >
        <img
          src={isLightTheme ? logoColor : logoRoxo}
          alt='Logo Amooora'
          width={80}
          height={80}
        />
        <Menu />
      </div>
    </header>
  );
};

export default Header;

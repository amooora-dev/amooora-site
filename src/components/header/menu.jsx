import { Moon, Sun } from "lucide-react";
import { cn } from "../../utils/cn";
import useMobile from "../../utils/useMobile";
import { useTheme } from "../../utils/useTheme";
import { useEffect, useRef } from "react";

const links = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#aplicativo", label: "Aplicativo" },
  { href: "#valores", label: "Nossos Valores" },
  { href: "#produtos", label: "Loja" },
  { href: "#faq", label: "FAQ" },
  { href: "#quem-somos", label: "Quem Somos" },
];

const Menu = ({ show = true, setShow = null }) => {
  const { theme, setTheme } = useTheme();
  const menuRef = useRef(null)
  const isMobile = useMobile();
  const isLightTheme = theme === "light";

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target;
    const targetElement = document.querySelector(target.hash);
    if (target.tagName === "A" && isMobile) {
      if (!setShow) return;
      setShow(false);
    }
    window.scrollTo({
      top: targetElement.offsetTop - 60, // Adjust for fixed header height
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (isMobile && setShow) {
          setShow(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  return (
    <nav
      ref={menuRef}
      className={cn(
        "absolute top-0 right-0 md:transform-none md:static flex flex-col md:flex-row md:items-center md:justify-between md:w-[70%] w-[80%] p-4 transition-transform duration-300 ease-in-out z-50 h-full",
        isMobile && "shadow-lg",
        isLightTheme
          ? "bg-white shadow-zinc-800/8"
          : "bg-zinc-900 shadow-white/8",
        isMobile &&
          (show ? "transform -translate-x-0" : "transform translate-x-200")
      )}
    >
      <ul className='grow flex flex-col md:flex-row md:items-center md:justify-between md:w-auto w-full p-4'>
        {links.map((link) => (
          <li
            key={link.href}
            className={cn(
              "uppercase text-sm md:text-base font-semibold mb-2 md:mb-0"
            )}
          >
            <a
              href={link.href}
              className={cn(
                isLightTheme
                  ? "text-black hover:text-black/60"
                  : "text-white hover:text-white/60"
              )}
              onClick={handleClick}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setTheme(isLightTheme ? "dark" : "light");
        }}
        className={cn(
          "w-fit p-2 rounded-full transition-colors duration-300 outline-none ring-0 ring-offset-0 active:outline-none active:ring-2 active:ring-offset-2 active:ring-offset-gray-100 active:ring-gray-500 cursor-pointer",
          isLightTheme
            ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
            : "bg-gray-800 text-gray-200 hover:bg-gray-700",
          isMobile && "self-end"
        )}
      >
        {isLightTheme ? <Moon /> : <Sun />}
      </button>
    </nav>
  );
};

export default Menu;

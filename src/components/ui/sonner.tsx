"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "light" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-black group-[.toaster]:border-gray-light group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-slate-700 dark:group-[.toaster]:text-white dark:group-[.toaster]:border-slate-500",
          description:
            "group-[.toast]:text-slate-900 dark:group-[.toast]:text-slate-200",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-dark dark:group-[.toast]:bg-primary/90 dark:group-[.toast]:text-white hover:opacity-80",
          cancelButton:
            "group-[.toast]:bg-transparent group-[.toast]:border-primary group-[.toast]:text-primary hover:bg-primary/10",
          icon: "group-[.toast]:text-primary dark:group-[.toast]:text-primary/80",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

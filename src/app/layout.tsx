import Header from "@/components/header";
import ThemeProvider from "@/utils/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import CookiesToast from "@/components/home/toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amooora - Conexões e experiências lésbicas",
  description: "Cansada de aplicativos que não te entendem? A Amooora foi criada por e para sapatonas! Conecte-se com outras mulheres incríveis, encontre seu crush, faça novas amigas e participe de eventos sáficos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='author' content='Amooora' />
        <meta
          name='keywords'
          content='amooora, lésbicas, sapatão, comunidade, sáficas'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='shortcut icon'
          href='images/favicon.svg'
          type='image/x-icon'
        />
        <link rel='icon' href='images/favicon.svg' type='image/x-icon' />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='images/apple-touch-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='images/apple-touch-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='images/apple-touch-icon-76x76.png'
        />
        <link rel='apple-touch-icon' href='images/apple-touch-icon.png' />
        <link
          rel='icon'
          href='images/apple-touch-icon.png'
          type='image/x-icon'
        />

        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-900`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
          enableColorScheme={false}
          storageKey='amooora.theme'
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <CookiesToast />
        </ThemeProvider>
      </body>
    </html>
  );
}

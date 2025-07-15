import { Suspense } from "react";
import AppIntro from "./components/app";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Loading from "./components/loading";
import Manifesto from "./components/manifesto";
import Newsletter from "./components/newsletter";
import Store from "./components/store";
import CookiesToast from "./components/toast";
import Values from "./components/values";
import WhoAreWe from "./components/whoAreWe";
import ThemeProvider from "./utils/themeProvider";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <Header />
        <Hero />
        <Intro />
        <Manifesto />
        <AppIntro />
        <Values />
        <Store />
        <Faq />
        <WhoAreWe />
        <Newsletter />
        <Footer />
        <CookiesToast />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

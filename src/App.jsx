import { Suspense } from "react";
import AppIntro from "./components/app";
import Faq from "./components/faq";
import Header from "./components/header";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Loading from "./components/loading";
import Manifesto from "./components/manifesto";
import Store from "./components/store";
import Values from "./components/values";
import ThemeProvider from "./utils/themeProvider";
import WhoAreWe from "./components/whoAreWe";
import Newsletter from "./components/newsletter";

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
        {/* <CookiesToast /> */}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

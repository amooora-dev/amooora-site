import { Suspense } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Loading from "./components/loading";
import CookiesToast from "./components/toast";
import ThemeProvider from "./utils/themeProvider";

function App({ children }) {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <Header />
        {children}
        <Footer />
        <CookiesToast />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

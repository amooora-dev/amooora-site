import { Suspense } from "react";
import Header from "./components/header";
import Loading from "./components/loading";
import CookiesToast from "./components/toast";
import ThemeProvider from "./utils/themeProvider";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <Header />
        {/* <CookiesToast /> */}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

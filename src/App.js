import { Suspense, lazy } from "react";

import GlobalStyles from "./components/OuterLayout/components/styled/Global";
import "./fonts.css";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./custom_hooks";

import Preloader from "./Preloader";

const Main = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Main")), 3000);
  });
});

function App() {
  const theme = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<Preloader />}>
          <Main />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;

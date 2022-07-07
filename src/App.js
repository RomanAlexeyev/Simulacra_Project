import GlobalStyles from "./components/OuterLayout/components/styled/Global";
import "./fonts.css";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./custom_hooks";

import OuterLayout from "./components/OuterLayout";
import InnerLayout from "./components/InnerLayout";

function App() {
  const theme = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <OuterLayout />
        <InnerLayout />
      </ThemeProvider>
    </>
  );
}

export default App;

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import { darkTheme } from "../assets/themes/dark";
import { NavBar } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

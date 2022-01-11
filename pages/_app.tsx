import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../styles/theme";
import AppBar from "../components/Appbar";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

import { ThemeProvider, CssBaseline } from "@mui/material";
import VanillaTilt from "vanilla-tilt";
import theme from "../styles/theme";
import AppBar from "../components/Appbar";
import type { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      window.addEventListener("load", () => {
        //@ts-expect-error
        VanillaTilt.init(document.querySelectorAll(".card-tilt"), {
          max: 15,
          speed: 100,
          glare: true,
          "max-glare": 0.6,
          gyroscope: false,
        })
      });
    }
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;

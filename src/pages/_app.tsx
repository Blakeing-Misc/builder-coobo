import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${archivo.variable} ${roboto.variable} min-h-screen scroll-smooth font-sans antialiased `}
    >
      <Component {...pageProps} />
    </main>
  );
}

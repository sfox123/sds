import { Albert_Sans, Roboto_Condensed } from "next/font/google";

const primary_font = Albert_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  adjustFontFallback: false,
});

const secondary_font = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
  adjustFontFallback: false,
});

import "@css/plugins/bootstrap-grid.css";
import "./globals.css";

import "@css/plugins/swiper.min.css";

import "@fonts/css/font-awesome.min.css";

import "@css/plugins/magnific-popup.css";

import "@css/style.css";
import { ThemeProvider } from "@/components/ThemeContext";

export const metadata = {
  title: "SDS - Fire Safety",
  keywords:
    "fire safety, SDS, safety data sheets, emergency response, fire prevention",
  description:
    "SDS - Fire Safety is your go-to resource for comprehensive safety data sheets and fire safety information. Stay informed and prepared with our expert guidance on fire prevention and emergency response.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${primary_font.variable} ${secondary_font.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

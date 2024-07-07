import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
//Component Imports
import Header from "@/components/layout/Header";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider } from "next-themes";
import StairTransition from "@/components/StairTransition";
import GoogleAnalytics from "@/components/GoogleAnalytics";
ThemeProvider;
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--f-jetbrainsMono",
});
export const metadata = {
  title: "Abhishek Manoharan",
  description: "Manos Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={jetbrainsMono.variable}>
        <ThemeProvider attribute="class">
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}

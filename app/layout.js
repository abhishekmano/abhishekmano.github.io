import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
//Component Imports
import Header from "@/components/layout/Header";
import { ThemeProvider } from "next-themes";
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
      <body className={jetbrainsMono.variable}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

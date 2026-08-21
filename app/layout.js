import localFont from "next/font/local";
import "./globals.css";
//Component Imports
import Header from "@/components/layout/Header";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider } from "next-themes";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { profile, seo, theme } from "@/content/site";

// All three faces are self-hosted rather than pulled from next/font/google: the
// build no longer reaches out to fonts.googleapis.com, so it works offline and
// behind a proxy, and the deploy stops depending on Google being reachable.
// These are the same latin variable woff2 files Google would have served.
const newsreader = localFont({
  src: "./fonts/Newsreader-Variable.woff2",
  weight: "300 700",
  display: "swap",
  variable: "--f-newsreader",
});

const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--f-inter",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Variable.woff2",
  weight: "100 800",
  display: "swap",
  variable: "--f-jetbrainsMono",
});

export const metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: seo.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-dvh`}
      >
        <GoogleAnalytics />
        {/* Which theme a first-time visitor gets is config, not code: set
            `theme.default` in content/site.js to "light", "dark" or "system".
            enableSystem is derived from it rather than hardcoded, because leaving
            it on while defaulting to light means next-themes still resolves the OS
            preference and a dark-mode visitor never sees light. */}
        <ThemeProvider
          attribute="class"
          defaultTheme={theme.default}
          enableSystem={theme.default === "system"}
        >
          <Header />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}

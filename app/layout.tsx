import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavigationMenuHandler } from "./components/NavigationMenuHandler";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./components/Footer";

import ProgressBar from "./ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foxomy",
  description: "Socially aware and caring",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressBar
            height="2px"
            color="rgba(45, 212, 191, 0.9)"
            options={{ showSpinner: false }}
          />
          <NavigationMenuHandler />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}

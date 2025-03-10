import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "./context/ThemeContext";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} ${robotoMono.variable}`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-64 py-4">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

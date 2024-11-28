"use client";

import "./globals.css";
import "../../styles/globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ClientLoaderWrapper from "./components/ClientLoaderWrapper";
import MobileNavBar from "./components/MobileNavBar";
import { I18nextProvider } from "react-i18next";
import i18n from "@/app/config/i18n";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize i18n on the client side
    if (typeof window !== "undefined") {
      i18n.init();
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body
          className={`${geistSans.variable} ${inter.className} body bg-[#020617] text-white min-h-screen`}
        >
          <header className="sticky top-0 z-[100] shadow-md">
            <Header />
          </header>

          <div className="flex flex-col lg:flex-row">
            <aside className="hidden lg:block lg:w-64 z-[9999]">
              <Sidebar />
            </aside>
            <main className="flex-1 pt-4 lg:px-8 bg-[#020617]">
              <ClientLoaderWrapper>{children}</ClientLoaderWrapper>
            </main>
          </div>

          <footer className="max-w-[1200px] mx-auto lg:ml-auto lg:mr-64 p-4">
            <Footer />
          </footer>

          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#020617] z-50 shadow-lg">
            <MobileNavBar />
          </div>
        </body>
      </html>
    </I18nextProvider>
  );
}

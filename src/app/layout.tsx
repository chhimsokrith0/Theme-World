import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../../styles/globals.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ClientLoaderWrapper from "./components/ClientLoaderWrapper";
import MobileNavBar from "./components/MobileNavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Theme App",
  description: "A Next.js web application with a custom theme.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/window.svg" />
      </head>
      <body
        className={`${geistSans.variable} body bg-[#020617] text-white min-h-screen`}
      >
        {/* Header */}
        <header className="sticky top-0 z-[100] shadow-md">
          <Header />
        </header>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar - Hidden on mobile, visible on large screens */}
          <aside className="hidden lg:block lg:w-64 z-[9999]">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 pt-4 lg:px-8 bg-[#020617]">
            <ClientLoaderWrapper>{children}</ClientLoaderWrapper>
          </main>
        </div>

        {/* Footer */}
        <footer className="max-w-[1200px] mx-auto lg:ml-auto lg:mr-64 p-4">
          <Footer />
        </footer>

        {/* Mobile Navigation Bar - Visible on mobile only */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#020617] z-50 shadow-lg">
          <MobileNavBar />
        </div>
      </body>
    </html>
  );
}

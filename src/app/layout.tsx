import type { Metadata } from "next";
import localFont from "next/font/local";
// import "../styles/globals.css";
import "./globals.css";

// Import your Header, Sidebar, and Footer components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

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
        className={`${geistSans.variable} bg-[#020617] text-white min-h-screen`}
      >
        {/* Header */}
        <Header />

        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 ml-64 pt-4 bg-[#020617]">
           
              {children}

          </main>
        </div>

        {/* Footer */}
        <div className="max-w-[1200px] mr-64 mx-auto p-4">
          <Footer />
        </div>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.scss";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Rudidigital",
//   description: "Homepage",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="root">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

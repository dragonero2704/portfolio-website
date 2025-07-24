import { Inter } from "next/font/google";
import Footer from "../ui/page/footer";
import Header from "../ui/page/header";
import "./globals.css";
import React, { Suspense } from "react";
import LoadingSkeleton from "../ui/LoadingSkeleton";

export const metadata = {
  title: "Rudidigital",
  description: "Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="root">
          {/* <Header /> */}
          <Suspense fallback={<LoadingSkeleton />}>
            <main className="main">{children}</main>
          </Suspense>
            <h1 className="text-4xl mb-10">Work in progress...</h1>

          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

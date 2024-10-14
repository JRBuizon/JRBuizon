import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import NextConfig from '@/next.config.mjs';

const rethink = Rethink_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremiah Ryan Buizon",
  description: "Jeremiah Ryan Buizon's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:url" content="https://jrbuizon.github.io/JRBuizon/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Jeremiah Ryan Buizon" />
      <meta property="og:description" content="Jeremiah Ryan Buizon's personal website" />

      <meta property="og:image" content={`${NextConfig.basePath}/public/images/cover.gif`} />


      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="jrbuizon.github.io" />
      <meta property="twitter:url" content="https://jrbuizon.github.io/JRBuizon/" />
      <meta name="twitter:title" content="Jeremiah Ryan Buizon" />
      <meta name="twitter:description" content="Jeremiah Ryan Buizon's personal website" />

      <meta property="twitter:image" content={`${NextConfig.basePath}/public/images/cover.gif`} />
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={rethink.className}>{children}</body>
    </html>
  );
}

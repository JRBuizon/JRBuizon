import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urba = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yabuizon",
  description: "Jeremiah Ryan Buizon's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urba.className}>{children}</body>
    </html>
  );
}

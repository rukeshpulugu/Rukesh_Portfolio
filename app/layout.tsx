import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const desc = "Rukesh Pulugu — aspiring Data Analyst skilled in Excel, SQL, Python and Power BI. Explore dashboards, SQL analysis and internship work.";
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Rukesh Pulugu | Data Analyst Portfolio",
  description: desc,
  keywords: ["Data Analyst", "Power BI", "SQL", "Excel", "Python", "Data Analytics portfolio", "Rukesh Pulugu"],
  openGraph: { title: "Rukesh Pulugu | Data Analyst Portfolio", description: desc, url: SITE, type: "website", images: [{ url: "/rukesh.jpeg", width: 402, height: 531, alt: "Rukesh Pulugu" }] },
  twitter: { card: "summary", title: "Rukesh Pulugu | Data Analyst Portfolio", description: desc },
};
const themeScript = `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}`;
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BioFieldPower",
  description:
    "Biofield Power Pvt. Ltd. is a pioneering startup incubated at IIT Ropar and part of the prestigious Agriculture and Water Technology Development Hub established in 2021 by the Department of Science & Technology, Government of India. With a mission to empower farmers and transform rural economies, we develop innovative technologies that bridge the gap between traditional agriculture and modern advancements.",
  keywords: [
    "Biofield Power",
    "agriculture technology",
    "IIT Ropar startup",
    "sustainable farming",
    "digital agriculture",
  ],
  authors: [{ name: "Biofield Power Pvt. Ltd." }],
  openGraph: {
    title: "BioFieldPower",
    description:
      "Learn more about Biofield Power Pvt. Ltd., a pioneering startup incubated at IIT Ropar, dedicated to transforming agriculture with innovative technologies.",
    type: "website",
    url: "https://www.biofieldpower.com/", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

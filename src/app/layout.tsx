/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aknehealth.id"),
  title: {
    default:
      "Aiken - Best Mental Therapy with Apps & Books | Feel Better in Minutes",
    template:
      "%s - Best Mental Therapy with Apps & Books | Feel Better in Minutes",
  },
  description:
    "Interactive therapeutic media to improve adolescent mental health | Feel Better in Minutes",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "AIKEN",
    description:
      "Best Mental Therapy with Apps & Books | Feel Better in Minute",
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
          defer
        />
        {/* <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-apexcharts"></script> */}
        {/* <!-- AOS Animation --> */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

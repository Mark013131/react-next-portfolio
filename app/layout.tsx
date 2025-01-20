import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const myFont = localFont({
  src: "PixelMplus12-Regular.ttf",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | 青山陽希のポートフォリオサイト",
    default: "青山陽希のポートフォリオサイト",
  },
  description:
    "このサイトはSEを目指している学生のポートフォリオサイトになります。",
  openGraph: {
    title: "ポートフォリオ",
    description:
      "このサイトはSEを目指している学生のポートフォリオサイトになります。",
    images: ["/aoyama.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-XXX" />
    </html>
  );
}

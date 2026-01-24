import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "123printsetupandhelp",
  description: "123printsetupandhelp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17886206014"
          strategy="afterInteractive"
        />

        {/* Google Ads init + debug logs */}
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            console.log("🟡 Loading Google Ads gtag...");

            window.dataLayer = window.dataLayer || [];

            function gtag() {
              console.log("🔥 gtag called with:", arguments);
              dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'AW-17886206014');

            console.log("✅ Google Ads gtag initialized successfully");
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

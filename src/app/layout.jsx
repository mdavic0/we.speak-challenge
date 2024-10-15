import localFont from "next/font/local";
import "./globals.css";
import WeSpeakLogo from "./ui/we-speak-logo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "WeCount",
  description: "Challenge Técnico - WeSpeak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex shrink-0 pl-40 bg-white h-[61px]">
          <WeSpeakLogo />
        </header>
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Red_Hat_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-redhatdisplay"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const viewport: Viewport = {
  themeColor: "#428DFF"
};

export const metadata: Metadata = {
  title: "GameCrypt - The best. I guess.",
  description: "Convert your text into GameCrypt.",
  authors: [{ name: "Asmodeus", url: "https://asmocore.eu" }],
  keywords: ["Fortnite", "league of legends", "Valorant", "BeamNG", "Minecraft", "Roblox", "gamecrypt", "text encoding", "encoder"],
  applicationName: "GameCrypt",
  creator: "Asmodeus",
  icons: {
    icon: 'favicon.ico'
  },
  publisher: "Asmodeus"
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${redHatDisplay.className} ${spaceGrotesk.className} flex flex-col min-h-screen w-full`}>
        <NavBar />
        <main className="w-full flex-grow flex items-center justify-center bg-dark-200">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

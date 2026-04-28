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

// 🔥 METADATA UNIFICADO (solo uno)
export const metadata = {
  title: "BP Group Holding",
  description: "Desarrollo, Agroindustria e Infraestructura",

  icons: {
    icon: "/media/bp-logo.png",
    shortcut: "/media/bp-logo.png",
    apple: "/media/bp-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
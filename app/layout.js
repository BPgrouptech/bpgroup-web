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
  metadataBase: new URL("https://bpgroup.mx"),

  title: {
    default: "BP Group Holding",
    template: "%s | BP Group",
  },

  description:
    "Grupo empresarial enfocado en agroindustria, infraestructura, construcción, desarrollo e inversión.",

  keywords: [
    "BP Group",
    "BP Group Holding",
    "Los Lobos",
    "agroindustria",
    "banano",
    "constructora",
    "infraestructura",
    "desarrollo empresarial",
    "Ecuador",
    "México",
  ],

  authors: [{ name: "BP Group" }],
  creator: "BP Group",
  publisher: "BP Group",

  openGraph: {
    title: "BP Group Holding",
    description:
      "Agroindustria, infraestructura, construcción, desarrollo e inversión.",
    url: "https://bpgroup.mx",
    siteName: "BP Group",
    images: [
      {
        url: "/media/preview-bpgroup.png",
        width: 1200,
        height: 630,
        alt: "BP Group Holding",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BP Group Holding",
    description:
      "Grupo empresarial enfocado en agroindustria, infraestructura y desarrollo.",
    images: ["/media/preview-bpgroup.png"],
  },

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
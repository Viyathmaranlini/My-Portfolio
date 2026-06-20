import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Viyathma Arukgoda - Portfolio",
  description: "Computer Science undergraduate at NSBM Green University. Skilled in Python, JavaScript, C#, and full-stack web development with a strong interest in AI and machine learning.",
  openGraph: {
    title: "Viyathma Arukgoda - Portfolio",
    description: "Computer Science undergraduate | Full-stack Developer | AI Enthusiast",
    url: "https://my-portfolio-rosy-alpha-64.vercel.app",
    siteName: "Viyathma Arukgoda Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viyathma Arukgoda Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
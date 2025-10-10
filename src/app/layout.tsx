import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Yahya Muhandar Fathana | Portfolio",
  description: "Personal portfolio website showcasing my projects, video edits, and experiences.",
  openGraph: {
    title: "Yahya Muhandar Fathana | Portfolio",
    description: "Crafting digital experiences through code and design.",
    url: "https://portfolio-ashen-xi-9hccymyxe6.vercel.app",
    siteName: "Yahya Muhandar Fathana Portfolio",
    images: [
      {
        url: "/thumbnail.png", // 👈 your thumbnail image path
        width: 1200,
        height: 630,
        alt: "Yahya Muhandar Fathana Portfolio Preview",
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

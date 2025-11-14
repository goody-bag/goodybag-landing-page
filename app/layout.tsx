import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoodyBag - Gifting Made Personal, Beautiful, and Stress-Free",
  description:
    "From surprise boxes to corporate gifting, GoodyBag lets you curate, customize, and deliver gifts effortlessly. Join the waitlist for early access to the future of personalized gifting.",
  keywords: [
    "gifting",
    "gifts",
    "personalized gifts",
    "corporate gifting",
    "gift delivery",
    "curated gifts",
    "gift packages",
  ],
  authors: [{ name: "GoodyBag" }],
  openGraph: {
    title: "GoodyBag - Gifting Made Personal, Beautiful, and Stress-Free",
    description:
      "From surprise boxes to corporate gifting, GoodyBag lets you curate, customize, and deliver gifts effortlessly.",
    url: "https://goodybag.africa",
    siteName: "GoodyBag",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GoodyBag - Personalized Gifting Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoodyBag - Gifting Made Personal, Beautiful, and Stress-Free",
    description:
      "Join the waitlist for early access to the future of personalized gifting.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}

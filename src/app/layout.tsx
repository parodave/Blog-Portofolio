import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog de Karim Hammouche — Ses plus beaux projets",
  description:
    "Articles et notes de Karim Hammouche : parcours, projets, DAO, tech & automatisations.",
  openGraph: {
    title: "Blog de Karim Hammouche — Ses plus beaux projets",
    description:
      "Articles et notes de Karim Hammouche : parcours, projets, DAO, tech & automatisations.",
    images: ["/og/karim-blog.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <title>Blog de Karim Hammouche — Ses plus beaux projets</title>
        <meta
          name="description"
          content="Articles et notes de Karim Hammouche : parcours, projets, DAO, tech & automatisations."
        />
        <meta
          property="og:title"
          content="Blog de Karim Hammouche — Ses plus beaux projets"
        />
        <meta
          property="og:description"
          content="Articles et notes de Karim Hammouche : parcours, projets, DAO, tech & automatisations."
        />
        <meta property="og:image" content="/og/karim-blog.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

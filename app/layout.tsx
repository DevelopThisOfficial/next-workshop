import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { inter } from "./fonts";

export const metadata = {
  title: "Next Workshop",
  description: "DevelopThis 2023 by @judeclark19",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={inter.className}>
        <main id="main-parent">
          <Header />
          <div id="main-children">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

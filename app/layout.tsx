import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

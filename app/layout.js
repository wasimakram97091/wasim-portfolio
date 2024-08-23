import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wasim's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

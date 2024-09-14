import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | A Yarnist Inventory",
    default: "A Yarnist Inventory",
  },
  description: "Organize Your Yarn Inventory and Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {/* <header className=" bg-dominant pl-12 py-9 w-screen">
          <img src="/favicon.ico" alt="A Blue Yarn Ball With Two Brown Knitting Needles Sticking Out of the Top Right " />
        </header> */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

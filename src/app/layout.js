"use client";
import { Cairo } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import TokenCheck from "@/components/TokenCheck"; 
import { Provider } from "react-redux";
import store from "@/redux/store";
import { usePathname } from "next/navigation";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
  weight: ["400", "600", "500", "700"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/forget" || pathname === "/verify" || pathname === "/reset";

  return (
    <html lang="en" className={cairo.variable}>
      <body className={`${isAuthPage ? "bg-[#d3e5ff]" : "bg-white"} flex flex-col min-h-screen font-cairo`}>
        <Provider store={store}>
          <NavBar />
          <main className="flex-grow">{children}</main>
          <TokenCheck />  
        </Provider>
      </body>
    </html>
  );
}

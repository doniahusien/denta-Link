"use client";
import { useState, useEffect } from "react";
import { Cairo } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import TokenCheck from "@/components/TokenCheck";
import Loader from "@/components/UI/Loader";
import { Provider, useSelector } from "react-redux";
import store from "@/redux/store";
import { usePathname } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";


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
      <body
        className={`${isAuthPage ? "bg-[#d3e5ff]" : ""
          } flex flex-col min-h-screen font-cairo`}
      >
        <Provider store={store}>
          <LayoutWithLoader>{children}</LayoutWithLoader>
        </Provider>
      </body>
    </html>
  );
}

// Component to handle the loader and layout together
const LayoutWithLoader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        <NavBar />
        <main className="flex-grow">{children}</main>
        <TokenCheck />
      </div>
    </>
  );
};

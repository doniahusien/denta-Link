"use client";
import { Suspense } from "react";
import { Cairo } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import TokenCheck from "@/components/TokenCheck";
import DelayedLoader from "@/components/UI/Loader/DelayedLoader";
import { Provider } from "react-redux";
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
        className={`${
          isAuthPage ? "bg-[#d3e5ff]" : ""
        } flex flex-col min-h-screen font-cairo`}
      >
        <Provider store={store}>
          <Suspense fallback={<DelayedLoader />}>
            <LayoutContent isAuthPage={isAuthPage}>{children}</LayoutContent>
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}

// Separate component for the layout content
const LayoutContent = ({ children, isAuthPage }) => {
  return (
    <>
      <NavBar />
      <main className="flex-grow">{children}</main>
      <TokenCheck />
    </>
  );
};
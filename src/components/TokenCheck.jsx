"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer/Footer";

export default function TokenCheck() {
  const pathname = usePathname();
  const authPages = ["/login", "/signup", "/reset","/forget","/verify"];
  const isAuthPage = authPages.some((path) => pathname.startsWith(path));

  if ( isAuthPage) return null;  
  return <Footer />;
}

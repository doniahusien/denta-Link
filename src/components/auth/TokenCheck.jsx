"use client";
import { useSelector } from "react-redux";
import Footer from "@/components/Footer/Footer";

export default function TokenCheck() {
  const { token } = useSelector((state) => state.auth);
  
  if (!token) return null; 
  return <Footer />;
}

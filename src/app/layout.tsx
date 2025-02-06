'use client'


import { ClerkProvider } from "@clerk/nextjs";
// import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Loading from "./loading";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  const isStudio = pathname.startsWith("/studio");
  const isHome = pathname.startsWith("/sign-in");
  const isAdmin = pathname.startsWith("/admin");
  const isOrders = pathname.startsWith("/orders");
  const isCustomers = pathname.startsWith("/customers");
  const isStatistics = pathname.startsWith("/product-data");
  const isReviews = pathname.startsWith("/reviews");

  const studioAndHome =
    !isStudio && !isHome && !isAdmin && !isOrders && !isCustomers && !isStatistics && !isReviews;

  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
        <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange 
    >
          <Toaster richColors />
          {studioAndHome && !isLoading && <Navbar />}
          {isLoading ? <Loading /> : children}
          {studioAndHome && !isLoading && <Footer />}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

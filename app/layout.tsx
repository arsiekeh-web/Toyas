import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { BottomNav } from "@/components/bottom-nav";
import { Header } from "@/components/header";

// NOTE: Using system font stack because this sandbox can't reach
// fonts.googleapis.com. In Termux (real internet access), swap back to:
//   import { Poppins, Fraunces } from "next/font/google";
// and restore the --font-poppins / --font-display variables below.

export const metadata: Metadata = {
  title: "Toyas — Your Favorite Wellness and Lifestyle Store",
  description: "Matcha drinks, homeware, snacks and gifts in Freetown, Sierra Leone.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CartProvider>
          <div className="mx-auto flex w-full max-w-[430px] flex-1 flex-col">
            <Header />
            <main className="flex-1 pb-24">{children}</main>
            <BottomNav />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

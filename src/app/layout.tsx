import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-providers";
import TrpcProvider from "@/components/providers/trpc-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-providers";
import TrpcProvider from "@/components/providers/trpc-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from '@clerk/nextjs';
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <TrpcProvider>
        <html lang="en">
          <body className={inter.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
              forcedTheme="light"
              disableTransitionOnChange
            >
              <div className="relative min-h-screen">
                {children}
                <Toaster />
              </div>
            </ThemeProvider>
          </body>
        </html>
      </TrpcProvider>
    </ClerkProvider>
  );
}

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import TrpcProvider from "@/components/providers/trpc-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import SiteHeader from "@/components/layouts/site-header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={inter.className}>
          <TrpcProvider>
            <div className="flex flex-col h-screen overflow-hidden">
              <SiteHeader />
              <div className="flex-1 overflow-hidden">{children}</div>
            </div>
            <Toaster />
          </TrpcProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}


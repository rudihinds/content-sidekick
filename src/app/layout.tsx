import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-providers";
import TrpcProvider from "@/components/providers/trpc-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
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
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </TrpcProvider>
  );
}

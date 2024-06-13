import type { Metadata } from "next";
import { Roboto_Slab as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Adigun Samuel",
  description:
    "I am a passionate software developer with experience in building web applications",
  openGraph: {
    title: "Oluwadabira",
    description: "My personal website",
    images:
      "https://i.pinimg.com/564x/c9/ce/dd/c9ceddddbf63b2aea6fbb81e671a40fe.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-[#F4F3EF] dark:bg-[#121212] dark:text-zinc-300 text-[#242223] px-10 md:px-20 !scroll-smooth",
          font.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="theme"
          disableTransitionOnChange
        >
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

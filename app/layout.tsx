import type { Metadata } from "next";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import "./globals.css"; 
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const montserratAlternates = Montserrat_Alternates({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Printforge`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body>
        <div className={`${albertSans.variable} ${montserratAlternates} antialiased`}>
          {children}
        </div>
      </body>
    </html>
  );
}

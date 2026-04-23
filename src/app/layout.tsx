import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kurator Editorial Dashboard",
  description: "Premium SaaS Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="light">
      <body className="bg-surface text-on-surface antialiased overflow-hidden font-body">
        {children}
      </body>
    </html>
  );
}

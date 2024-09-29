"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "./redux-provider";
import { usePathname } from "next/navigation";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Define pages that should not use Redux
  const pagesWithoutRedux = ["/user"]; // Example paths

  // Check if the current path matches any in the list
  const useRedux = !pagesWithoutRedux.includes(pathname);
console.log('p',pathname)
  return (
    <html lang="en">
      <body className={inter.className}>
        {useRedux ? <ReduxProvider>{children}</ReduxProvider> : children}
      </body>
    </html>
  );
}

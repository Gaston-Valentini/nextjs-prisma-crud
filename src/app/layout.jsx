import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next.js - Prisma CRUD",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className + " bg-gray-950 text-white"}>{children}</body>
        </html>
    );
}

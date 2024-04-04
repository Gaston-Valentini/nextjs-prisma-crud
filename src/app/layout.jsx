import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next.js - Prisma CRUD",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className + " bg-gray-950 text-white"}>
                <nav className="bg-slate-900">
                    <div className="container mx-auto flex justify-between items-center py-3">
                        <h3 className="font-bold text-2xl">Next.js - Prisma - CRUD</h3>
                        <ul className="flex gap-x-2 text-lg font-bold">
                            <li>
                                <Link href="/" className="text-slate-400 hover:text-slate-200">
                                    Tus tareas
                                </Link>
                            </li>
                            <li>
                                <Link href="/create" className="text-slate-400 hover:text-slate-200">
                                    Crear tarea
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-slate-400 hover:text-slate-200">
                                    Sobre Nosotros
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>{children}</div>
            </body>
        </html>
    );
}

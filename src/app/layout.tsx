import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ProvidersWrapper from "@/components/common/ProvidersWrapper";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

interface RootLayoutProps {
    children: React.ReactNode;
    modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ProvidersWrapper>
                    {modal}
                    <div className="container mx-auto max-w-screen-2xl min-h-screen">
                        {children}
                    </div>
                </ProvidersWrapper>
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import {
    Geist,
    Geist_Mono,
    Noto_Serif_Hebrew,
    Noto_Sans_Hebrew,
    Noto_Naskh_Arabic
} from "next/font/google";
import "./css/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const notoSerif = Noto_Serif_Hebrew({
    variable: "--font-noto-serif",
    subsets: ["hebrew"]
});

const notoSans = Noto_Sans_Hebrew({
    variable: "--font-noto-sans",
    subsets: ["hebrew"]
});

const notoNaskh = Noto_Naskh_Arabic({
    variable: "--font-noto-naskh",
    subsets: ["arabic"]
});

export const metadata: Metadata = {
    title: "Aleph Bets",
    description: "Common sounds from across the world",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${notoSans.variable} ${notoNaskh.variable}`}>
                {children}
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import {
    Geist,
    Geist_Mono,
    Noto_Serif_Hebrew,
    Noto_Sans_Hebrew,
    Rubik_Doodle_Shadow,
    Noto_Naskh_Arabic,
    Kelly_Slab,
    Sansita
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

const rubikDoodleShadow = Rubik_Doodle_Shadow({
    variable: "--font-rubik-doodle-shadow",
    subsets: ["hebrew"],
    weight: ["400"]
});

const notoSans = Noto_Sans_Hebrew({
    variable: "--font-noto-sans",
    subsets: ["hebrew"]
});

const notoNaskh = Noto_Naskh_Arabic({
    variable: "--font-noto-naskh",
    subsets: ["arabic"]
});

const kellySlab = Kelly_Slab({
    variable: "--font-kelly-slab",
    subsets: ["latin"],
    weight: ["400"]
});

const sansista = Sansita({
    variable: "--font-sansista",
    subsets: ["latin"],
    weight: ["400"]
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
            <body className={`${sansista.variable} ${kellySlab.variable} ${rubikDoodleShadow.variable} ${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${notoSans.variable} ${notoNaskh.variable}`}>
                {children}
            </body>
        </html>
    );
}

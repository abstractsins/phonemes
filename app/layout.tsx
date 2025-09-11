//************************************************* */
//*------------------- IMPORTS -------------------- */
//************************************************* */

import type { Metadata } from "next";

import {
    kellySlab,
    sansista,
    geistMono, geistSans,
    notoSans, notoNaskh, notoSerif,
    rubikDoodleShadow, robotoSlab    
} from "@/fonts/fonts";

import "./css/globals.css";


//************************************************* */
//*------------------- EXPORTS -------------------- */
//************************************************* */

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
            <body className={`${robotoSlab.variable} ${sansista.variable} ${kellySlab.variable} ${rubikDoodleShadow.variable} ${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${notoSans.variable} ${notoNaskh.variable}`}>
                {children}
            </body>
        </html>
    );
}

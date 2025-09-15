//************************************************* */
//*------------------- IMPORTS -------------------- */
//************************************************* */

import type { Metadata } from "next";

import {
    kellySlab,
    sansista,
    geistMono, geistSans,
    notoSans, notoNaskh, notoSerif,
    rubikDoodleShadow, 
    robotoSlab, robotoSerif, roboto,
    playwrite, 
    playpen
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
            <body className={`${playpen.variable} ${playwrite.variable} ${roboto.variable} ${robotoSerif.variable} ${robotoSlab.variable} ${sansista.variable} ${kellySlab.variable} ${rubikDoodleShadow.variable} ${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${notoSans.variable} ${notoNaskh.variable}`}>
                {children}
            </body>
        </html>
    );
}

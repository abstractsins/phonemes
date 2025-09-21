//************************************************* */
//*------------------- IMPORTS -------------------- */
//************************************************* */

import type { Metadata } from "next";

import {
    // * ------------- ARABIC ------------- //
    notoNaskh,
    // * ------------- HEBREW ------------- //
    notoSans, notoSerif,
    playpen,
    rubikDoodleShadow,
    // * ------------- LATIN ------------- //
    geistSans, geistMono,
    kellySlab,
    playwrite,
    roboto, robotoSerif, robotoSlab,
    sansista,
} from "@/fonts/fonts";

import "./css/globals.css";


//************************************************* */
//*------------------- EXPORTS -------------------- */
//************************************************* */

let fontString = '';
// * ------------- ARABIC ------------- //
fontString += `${notoNaskh.variable} `;
// * ------------- HEBREW ------------- //
fontString += `${notoSans.variable} `;
fontString += `${notoSerif.variable} `;
fontString += `${playpen.variable} `;
fontString += `${rubikDoodleShadow.variable} `;
// * ------------- LATIN ------------- //
fontString += `${geistMono.variable} `;
fontString += `${geistSans.variable} `;
fontString += `${kellySlab.variable} `;
fontString += `${playwrite.variable} `;
fontString += `${roboto.variable} `;
fontString += `${robotoSerif.variable} `;
fontString += `${robotoSlab.variable} `;
fontString += `${sansista.variable} `;

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
            <body className={fontString}>
                {children}
            </body>
        </html>
    );
}

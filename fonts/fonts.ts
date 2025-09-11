//************************************************* */
//*------------------- IMPORTS -------------------- */
//************************************************* */

import {
    Geist,
    Geist_Mono,
    Noto_Serif_Hebrew,
    Noto_Sans_Hebrew,
    Rubik_Doodle_Shadow,
    Roboto_Slab,
    Noto_Naskh_Arabic,
    Kelly_Slab,
    Sansita
} from "next/font/google";


//************************************************* */
//*------------------- EXPORTS -------------------- */
//************************************************* */

// * ------------- ARABIC ------------- //

export const notoNaskh = Noto_Naskh_Arabic({
    variable: "--font-noto-naskh",
    subsets: ["arabic"]
});


// * ------------- HEBREW ------------- //

export const notoSerif = Noto_Serif_Hebrew({
    variable: "--font-noto-serif-hebrew",
    subsets: ["hebrew"]
});

export const rubikDoodleShadow = Rubik_Doodle_Shadow({
    variable: "--font-rubik-doodle-shadow",
    subsets: ["hebrew"],
    weight: ["400"]
});

export const notoSans = Noto_Sans_Hebrew({
    variable: "--font-noto-sans-hebrew",
    subsets: ["hebrew"]
});


// * ------------- LATIN ------------- //

export const kellySlab = Kelly_Slab({
    variable: "--font-kelly-slab",
    subsets: ["latin"],
    weight: ["400"]
});

export const robotoSlab = Roboto_Slab({
    variable: "--font-roboto-slab",
    subsets: ["latin"],
})

export const sansista = Sansita({
    variable: "--font-sansista",
    subsets: ["latin"],
    weight: ["400"]
});

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
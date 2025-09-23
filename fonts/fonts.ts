//************************************************* */
//*------------------- IMPORTS -------------------- */
//************************************************* */

import {
    // ----- ARABIC ----- //
    Noto_Naskh_Arabic,

    // ----- HEBREW ----- //
    Noto_Serif_Hebrew,
    Noto_Sans_Hebrew,
    Rubik_Doodle_Shadow,
    Playpen_Sans_Hebrew,

    // ----- LATIN ----- //
    Geist, Geist_Mono,
    Roboto_Slab, Roboto_Serif, Roboto,
    Kelly_Slab,
    Sansita,
    Playwrite_US_Trad
} from 'next/font/google';


//************************************************* */
//*------------------- EXPORTS -------------------- */
//************************************************* */

// * ------------- ARABIC ------------- //

export const notoNaskh = Noto_Naskh_Arabic({
    variable: '--font-noto-naskh',
    subsets: ['arabic']
});


// * ------------- HEBREW ------------- //

export const notoSans = Noto_Sans_Hebrew({
    variable: '--font-noto-sans-hebrew',
    subsets: ['hebrew']
});

export const notoSerif = Noto_Serif_Hebrew({
    variable: '--font-noto-serif-hebrew',
    subsets: ['hebrew']
});

export const playpen = Playpen_Sans_Hebrew({
    variable: '--font-playpen',
    subsets: ['hebrew']
})

export const rubikDoodleShadow = Rubik_Doodle_Shadow({
    variable: '--font-rubik-doodle-shadow',
    subsets: ['hebrew', 'latin', 'cyrillic'],
    weight: ['400']
});

// * ------------- LATIN ------------- //

export const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const kellySlab = Kelly_Slab({
    variable: '--font-kelly-slab',
    subsets: ['latin'],
    weight: ['400']
});

export const playwrite = Playwrite_US_Trad({
    variable: '--font-playwrite'
});

export const roboto = Roboto({
    variable: '--font-roboto-sans',
    subsets: ['latin'],
});

export const robotoSerif = Roboto_Serif({
    variable: '--font-roboto-serif',
    subsets: ['latin'],
});

export const robotoSlab = Roboto_Slab({
    variable: '--font-roboto-slab',
    subsets: ['latin'],
});

export const sansista = Sansita({
    variable: '--font-sansista',
    subsets: ['latin'],
    weight: ['400']
});
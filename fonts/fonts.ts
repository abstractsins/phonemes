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
    Roboto_Serif,
    Roboto,
    Noto_Naskh_Arabic,
    Kelly_Slab,
    Sansita,
    Playwrite_US_Trad,
    Playpen_Sans_Hebrew
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

export const notoSerif = Noto_Serif_Hebrew({
    variable: '--font-noto-serif-hebrew',
    subsets: ['hebrew']
});

export const rubikDoodleShadow = Rubik_Doodle_Shadow({
    variable: '--font-rubik-doodle-shadow',
    subsets: ['hebrew', 'latin'],
    weight: ['400']
});

export const notoSans = Noto_Sans_Hebrew({
    variable: '--font-noto-sans-hebrew',
    subsets: ['hebrew']
});

export const playpen = Playpen_Sans_Hebrew({
    variable: '--font-playpen',
    subsets: ['hebrew']
})


// * ------------- LATIN ------------- //

export const kellySlab = Kelly_Slab({
    variable: '--font-kelly-slab',
    subsets: ['latin'],
    weight: ['400']
});

export const robotoSlab = Roboto_Slab({
    variable: '--font-roboto-slab',
    subsets: ['latin'],
})

export const robotoSerif = Roboto_Serif({
    variable: '--font-roboto-serif',
    subsets: ['latin'],
})

export const roboto = Roboto({
    variable: '--font-roboto-sans',
    subsets: ['latin'],
})


export const sansista = Sansita({
    variable: '--font-sansista',
    subsets: ['latin'],
    weight: ['400']
});

export const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const playwrite = Playwrite_US_Trad({
    variable: '--font-playwrite'
})
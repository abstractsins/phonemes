import { Language, Letter } from '@/app/types/types';
import { heIL } from '../dialects/dialects';

//***************
//****** א ******
//***************
export const MH_ALEF: Letter = {
    order: 1,
    names: [
        {
            char: 'Alef',
            spellings: ['Alef', 'Aleph'],
            phonetics: { dictionary: 'ä-lef', ipa: 'ˈʔalef' }
        }
    ],
    category: 'matres',
    glyphs: { script: 'Hebrew', forms: { standard: 'א' } },
    codepoints: [
        { char: 'א', unicode: 'U+05D0', ascii: 1488, oct: '2720', hex: '5d0', bin: '0000010111010000', name: 'HEBREW LETTER ALEF' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'ʔ', example: { word: 'אמא', gloss: 'mother' }, envNote: 'often silent / glottal stop' }
            ],
        },
    ],
};

//***************
//****** ב ******
//***************
export const MH_BET: Letter = {
    order: 2,
    names: [
        {
            char: 'Bet',
            spellings: ['Bet'],
            phonetics: { dictionary: 'bet', ipa: 'bet' }
        },
        {
            char: 'Vet',
            spellings: ['Vet'],
            phonetics: { dictionary: 'vet', ipa: 'vet' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ב', dagesh: true } },
    codepoints: [
        { char: 'ב', unicode: 'U+05D1', ascii: 1489, oct: '2721', hex: '5d1', bin: '0000010111010001', name: 'HEBREW LETTER BET' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'b', example: { word: 'בבקשה', gloss: 'please' }, envNote: 'with dagesh (בּ)' },
                { ipa: 'v', example: { word: 'בבקשה', gloss: 'please' }, envNote: 'without dagesh (ב)' }
            ],
        },
    ],
};

//***************
//****** ג ******
//***************
export const MH_GIMEL: Letter = {
    order: 3,
    names: [
        {
            char: 'Gimel',
            spellings: ['Gimel'],
            phonetics: { dictionary: 'gē-mel', ipa: 'ˈɡimel' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ג', dagesh: true } },
    codepoints: [
        { char: 'ג', unicode: 'U+05D2', ascii: 1490, oct: '2722', hex: '5d2', bin: '0000010111010010', name: 'HEBREW LETTER GIMEL' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'g', example: { word: 'גגון', gloss: 'awning' }, envNote: 'standard Israeli' }
            ],
        },
    ],
};

//***************
//****** ד ******
//***************
export const MH_DALET: Letter = {
    order: 4,
    names: [
        {
            char: 'Dalet',
            spellings: ['Dalet'],
            phonetics: { dictionary: 'dä-let', ipa: 'ˈdalet' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ד', dagesh: true } },
    codepoints: [
        { char: 'ד', unicode: 'U+05D3', ascii: 1491, oct: '2723', hex: '5d3', bin: '0000010111010011', name: 'HEBREW LETTER DALET' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'd', example: { word: 'דלת', gloss: 'door' }, envNote: 'standard Israeli' }
            ],
        },
    ],
};

//***************
//****** ה ******
//***************
export const MH_HE: Letter = {
    order: 5,
    names: [
        {
            char: 'He',
            spellings: ['Hey'],
            phonetics: { dictionary: 'hā', ipa: 'he' }
        }
    ],
    category: 'matres',
    glyphs: { script: 'Hebrew', forms: { standard: 'ה' } },
    codepoints: [
        { char: 'ה', unicode: 'U+05D4', ascii: 1492, oct: '2724', hex: '5d4', bin: '0000010111010100', name: 'HEBREW LETTER HE' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'h', example: { word: 'אהבה', gloss: 'love' }, envNote: 'standard' },
                { ipa: 'a', example: { word: 'רוצה', gloss: 'want' }, envNote: 'mater at word-final (qamats-he)' }
            ],
        },
    ],
};

//***************
//****** ו ******
//***************
export const MH_VAV: Letter = {
    order: 6,
    names: [
        {
            char: 'Vav',
            spellings: ['Vav'],
            phonetics: { dictionary: 'väv', ipa: 'vav' }
        }
    ],
    category: 'matres',
    glyphs: { script: 'Hebrew', forms: { standard: 'ו' } },
    codepoints: [
        { char: 'ו', unicode: 'U+05D5', ascii: 1493, oct: '2725', hex: '5d5', bin: '0000010111010101', name: 'HEBREW LETTER VAV' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'v', example: { word: 'לויתן', gloss: 'whale' }, envNote: 'consonant' },
                { ipa: 'o', example: { word: 'הולכות', gloss: 'going' }, envNote: 'mater (holam male)' },
                { ipa: 'u', example: { word: 'סוף סוף', gloss: 'finally' }, envNote: 'mater (shuruk)' }
            ],
        },
    ],
};

//***************
//****** ז ******
//***************
export const MH_ZAYIN: Letter = {
    order: 7,
    names: [
        {
            char: 'Zayin',
            spellings: ['Zayin'],
            phonetics: { dictionary: 'zä-yin', ipa: 'ˈzajin' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ז' } },
    codepoints: [
        { char: 'ז', unicode: 'U+05D6', ascii: 1494, oct: '2726', hex: '5d6', bin: '0000010111010110', name: 'HEBREW LETTER ZAYIN' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'z', example: { word: 'זכור', gloss: 'remember' }, envNote: 'standard' }
            ],
        },
    ],
};

//***************
//****** ח ******
//***************
export const MH_HET: Letter = {
    order: 8,
    names: [
        {
            char: 'Het',
            spellings: ['Het', 'Khet'],
            phonetics: { dictionary: 'khet', ipa: 'χet' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ח' } },
    codepoints: [
        { char: 'ח', unicode: 'U+05D7', ascii: 1495, oct: '2727', hex: '5d7', bin: '0000010111010111', name: 'HEBREW LETTER HET' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'χ', example: { word: 'לחם', gloss: 'bread' }, envNote: 'standard Israeli' }
            ],
        },
    ],
};

//***************
//****** ט ******
//***************
export const MH_TET: Letter = {
    order: 9,
    names: [
        {
            char: 'Tet',
            spellings: ['Tet'],
            phonetics: { dictionary: 'tet', ipa: 'tet' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ט' } },
    codepoints: [
        { char: 'ט', unicode: 'U+05D8', ascii: 1496, oct: '2730', hex: '5d8', bin: '0000010111011000', name: 'HEBREW LETTER TET' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 't', example: { word: 'טפטוף', gloss: 'dripping' }, envNote: 'standard' }
            ],
        },
    ],
};

//***************
//****** י ******
//***************
export const MH_YOD: Letter = {
    order: 10,
    names: [
        {
            char: 'Yod',
            spellings: ['Yod', 'Yud'],
            phonetics: { dictionary: 'yōd', ipa: 'jod' }
        }
    ],
    category: 'matres',
    glyphs: { script: 'Hebrew', forms: { standard: 'י' } },
    codepoints: [
        { char: 'י', unicode: 'U+05D9', ascii: 1497, oct: '2731', hex: '5d9', bin: '0000010111011001', name: 'HEBREW LETTER YOD' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'j', example: { word: 'ירוק', gloss: 'green' }, envNote: 'consonant' },
                { ipa: 'i', example: { word: 'הביתי', gloss: 'domestic' }, envNote: 'mater (hiriq male)' }
            ],
        },
    ],
};

//***************
//****** כ ******
//***************
export const MH_KAF: Letter = {
    order: 11,
    names: [
        {
            char: 'Kaf',
            spellings: ['Kaf'],
            phonetics: { dictionary: 'kaf', ipa: 'kaf' }
        },
        {
            char: 'Khaf',
            spellings: ['Khaf', 'Chaf'],
            phonetics: { dictionary: 'khaf', ipa: 'χaf' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'כ', final: 'ך', dagesh: true } },
    codepoints: [
        { char: 'כ', unicode: 'U+05DB', ascii: 1499, oct: '2733', hex: '5db', bin: '0000010111011011', name: 'HEBREW LETTER KAF' },
        { char: 'ך', unicode: 'U+05DA', ascii: 1498, oct: '2732', hex: '5da', bin: '0000010111011010', name: 'HEBREW LETTER FINAL KAF' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'k', example: { word: 'כלב', gloss: 'dog', }, envNote: 'with dagesh (כּ)' },
                { ipa: 'χ', example: { word: 'נוסף לכך', gloss: 'in addition to this' }, envNote: 'without dagesh (כ ך)' }
            ],
        },
    ],
};

//***************
//****** ל ******
//***************
export const MH_LAMED: Letter = {
    order: 12,
    names: [
        {
            char: 'Lamed',
            spellings: ['Lamed'],
            phonetics: { dictionary: 'lä-med', ipa: 'ˈlamed' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ל' } },
    codepoints: [
        { char: 'ל', unicode: 'U+05DC', ascii: 1500, oct: '2734', hex: '5dc', bin: '0000010111011100', name: 'HEBREW LETTER LAMED' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'l', example: { word: 'ללכת', gloss: 'to go' }, envNote: 'standard' }
            ],
        },
    ],
};

//***************
//****** מ ******
//***************
export const MH_MEM: Letter = {
    order: 13,
    names: [
        {
            char: 'Mem',
            spellings: ['Mem'],
            phonetics: { dictionary: 'mem', ipa: 'mem' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'מ', final: 'ם' } },
    codepoints: [
        { char: 'מ', unicode: 'U+05DE', ascii: 1502, oct: '2736', hex: '5de', bin: '0000010111011110', name: 'HEBREW LETTER MEM' },
        { char: 'ם', unicode: 'U+05DD', ascii: 1501, oct: '2735', hex: '5dd', bin: '0000010111011101', name: 'HEBREW LETTER FINAL MEM' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'm', example: { word: 'ממתקים', gloss: 'confectionery' }, envNote: 'standard' }
            ],
        },
    ],
};

//***************
//****** נ ******
//***************
export const MH_NUN: Letter = {
    order: 14,
    names: [
        {
            char: 'Nun',
            spellings: ['Nun'],
            phonetics: { dictionary: 'nūn', ipa: 'nun' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'נ', final: 'ן' } },
    codepoints: [
        { char: 'נ', unicode: 'U+05E0', ascii: 1504, oct: '2740', hex: '5e0', bin: '0000010111100000', name: 'HEBREW LETTER NUN' },
        { char: 'ן', unicode: 'U+05DF', ascii: 1503, oct: '2737', hex: '5df', bin: '0000010111011111', name: 'HEBREW LETTER FINAL NUN' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'n', example: { word: 'נכון', gloss: 'correct' }, envNote: 'standard' }
            ],
        },
    ],
};

//***************
//****** ס ******
//***************
export const MH_SAMEKH: Letter = {
    order: 15,
    names: [
        {
            char: 'Samekh',
            spellings: ['Samekh', 'Samech'],
            phonetics: { dictionary: 'sä-mekh', ipa: 'ˈsameχ' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ס' } },
    codepoints: [
        { char: 'ס', unicode: 'U+05E1', ascii: 1505, oct: '2741', hex: '5e1', bin: '0000010111100001', name: 'HEBREW LETTER SAMEKH' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 's', example: { word: 'סיסמה', gloss: 'password' }, envNote: 'standard' }
            ],
        },
    ],
};

//***************
//****** ע ******
//***************
export const MH_AYIN: Letter = {
    order: 16,
    names: [
        {
            char: 'Ayin',
            spellings: ['Ayin'],
            phonetics: { dictionary: 'ī-yin / ah-yin', ipa: 'ˈajin' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ע' } },
    codepoints: [
        { char: 'ע', unicode: 'U+05E2', ascii: 1506, oct: '2742', hex: '5e2', bin: '0000010111100010', name: 'HEBREW LETTER AYIN' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'ʔ', example: { word: 'ארבע עשרה', gloss: 'fourteen' }, envNote: 'often silent in Israeli' }
            ],
        },
    ],
};

//***************
//****** פ ******
//***************
export const MH_PE: Letter = {
    order: 17,
    names: [
        {
            char: 'Pe',
            spellings: ['Peh', 'Pay'],
            phonetics: { dictionary: 'pā', ipa: 'pe' }
        },
        {
            char: 'Fe',
            spellings: ['Feh', 'Fay'],
            phonetics: { dictionary: 'fe', ipa: 'fe' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'פ', final: 'ף', dagesh: true } },
    codepoints: [
        { char: 'פ', unicode: 'U+05E4', ascii: 1508, oct: '2744', hex: '5e4', bin: '0000010111100100', name: 'HEBREW LETTER PE' },
        { char: 'ף', unicode: 'U+05E3', ascii: 1507, oct: '2743', hex: '5e3', bin: '0000010111100011', name: 'HEBREW LETTER FINAL PE' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'p', example: { word: 'פלפל', gloss: 'pepper' }, envNote: 'with dagesh (פּ)' },
                { ipa: 'f', example: { word: 'כפף', gloss: 'he bent' }, envNote: 'without dagesh (פ ף)' }
            ],
        },
    ],
};

//***************
//****** צ ******
//***************
export const MH_TSADI: Letter = {
    order: 18,
    names: [
        {
            char: 'Tsadi',
            spellings: ['Tsadi', 'Tzadi'],
            phonetics: { dictionary: 'tsä-dē', ipa: 'ˈtsadi' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'צ', final: 'ץ' } },
    codepoints: [
        { char: 'צ', unicode: 'U+05E6', ascii: 1510, oct: '2746', hex: '5e6', bin: '0000010111100110', name: 'HEBREW LETTER TSADI' },
        { char: 'ץ', unicode: 'U+05E5', ascii: 1509, oct: '2745', hex: '5e5', bin: '0000010111100101', name: 'HEBREW LETTER FINAL TSADI' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'ts', example: { word: 'לצוץ', gloss: 'to pop up' }, envNote: 'standard' }
            ],
        },
    ],
};

//***************
//****** ק ******
//***************
export const MH_QOF: Letter = {
    order: 19,
    names: [
        {
            char: 'Qof',
            spellings: ['Qof', 'Kof'],
            phonetics: { dictionary: 'kof', ipa: 'kof' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ק' } },
    codepoints: [
        { char: 'ק', unicode: 'U+05E7', ascii: 1511, oct: '2747', hex: '5e7', bin: '0000010111100111', name: 'HEBREW LETTER QOF' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'k', example: { word: 'קורא', gloss: 'reads' }, envNote: 'standard Israeli realization' }
            ],
        },
    ],
};

//***************
//****** ר ******
//***************
export const MH_RESH: Letter = {
    order: 20,
    names: [
        {
            char: 'Resh',
            spellings: ['Resh'],
            phonetics: { dictionary: 'resh', ipa: 'reʃ' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ר' } },
    codepoints: [
        { char: 'ר', unicode: 'U+05E8', ascii: 1512, oct: '2750', hex: '5e8', bin: '0000010111101000', name: 'HEBREW LETTER RESH' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'ʁ', example: { word: 'רוצה', gloss: 'wants' }, envNote: 'uvular common' },
                // { ipa: 'r', example: { word: 'רוח', gloss: 'wind' }, envNote: 'alveolar variant' },
            ],
        },
    ],
};

//***************
//****** ש ******
//***************
export const MH_SHIN: Letter = {
    order: 21,
    names: [
        {
            char: 'Shin',
            spellings: ['Shin'],
            phonetics: { dictionary: 'shēn', ipa: 'ʃin' }
        },
        {
            char: 'Sin',
            spellings: ['Sin'],
            phonetics: { dictionary: 'sēn', ipa: 'sin' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ש' } },
    codepoints: [
        { char: 'ש', unicode: 'U+05E9', ascii: 1513, oct: '2751', hex: '5e9', bin: '0000010111101001', name: 'HEBREW LETTER SHIN' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 'ʃ', example: { word: 'שחור', gloss: 'black' }, envNote: 'shin — dot right (שׁ)' },
                { ipa: 's', example: { word: 'שמח', gloss: 'happy' }, envNote: 'sin — dot left (שׂ)' }
            ],
        },
    ],
};

//***************
//****** ת ******
//***************
export const MH_TAV: Letter = {
    order: 22,
    names: [
        {
            char: 'Tav',
            spellings: ['Tav'],
            phonetics: { dictionary: 'täv', ipa: 'tav' }
        }
    ],
    category: 'consonant',
    glyphs: { script: 'Hebrew', forms: { standard: 'ת', dagesh: true } },
    codepoints: [
        { char: 'ת', unicode: 'U+05EA', ascii: 1514, oct: '2752', hex: '5ea', bin: '0000010111101010', name: 'HEBREW LETTER TAV' },
    ],
    phonology: [
        {
            dialect: heIL,
            phonemes: [
                { ipa: 't', example: { word: 'לתת', gloss: 'to give' }, envNote: 'standard Israeli' }
            ],
        },
    ],
};

//*====================================/
//*======== ASSEMBLED ALPHABET ========/
//*====================================/
export const hebrewAlphabet: Letter[] = [
    MH_ALEF, MH_BET,
    MH_GIMEL, MH_DALET, MH_HE,
    MH_VAV, MH_ZAYIN, MH_HET, MH_TET,
    MH_YOD, MH_KAF,
    MH_LAMED, MH_MEM, MH_NUN,
    MH_SAMEKH, MH_AYIN, MH_PE,
    MH_TSADI, MH_QOF, MH_RESH,
    MH_SHIN, MH_TAV
];

//*====================================/
//*======== ASSEMBLED LANGUAGE ========/
//*====================================/
export const ModernHebrew: Language = {
    name: "Modern Hebrew",
    nick: "Hebrew",
    abbr: "MH",
    alphabet: hebrewAlphabet,
    script: 'Hebrew',
};

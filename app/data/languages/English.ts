import { Language, Letter } from '@/app/types/types';

import { enGA } from '../dialects/dialects';


//*====================================/
//*======== INDIVIDUAL LETTERS ========/
//*====================================/

//***************
//****** A ******
//***************
export const EN_A: Letter = {
    order: 1,
    names: ['A'],
    category: 'vowel',
    glyphs: { script: 'Latin', forms: { upper: 'A', lower: 'a' } },
    codepoints: [
        { char: 'A', unicode: 'U+0041', ascii: 65, oct: '101', hex: '41', bin: '01000001' },
        { char: 'a', unicode: 'U+0061', ascii: 97, oct: '141', hex: '61', bin: '01100001' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'eɪ', example: { word: 'late' } },
                { ipa: 'æ', example: { word: 'cat' } },
                { ipa: 'ɑ', example: { word: 'father' } },
                { ipa: 'ə', example: { word: 'about' } }
            ],
        },
    ],
};


//***************
//****** B ******
//***************
export const EN_B: Letter = {
    order: 2,
    names: ['B'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'B', lower: 'b' } },
    codepoints: [
        { char: 'B', unicode: 'U+0042', ascii: 66, oct: '102', hex: '42', bin: '01000010' },
        { char: 'b', unicode: 'U+0062', ascii: 98, oct: '142', hex: '62', bin: '01100010' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'b', example: { word: 'bat' } }
            ],
        },
    ],
};


//***************
//****** C ******
//***************
export const EN_C: Letter = {
    order: 3,
    names: ['C'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'C', lower: 'c' } },
    codepoints: [
        { char: 'C', unicode: 'U+0043', ascii: 67, oct: '103', hex: '43', bin: '01000011' },
        { char: 'c', unicode: 'U+0063', ascii: 99, oct: '143', hex: '63', bin: '01100011' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'k', example: { word: 'cat' } },
                { ipa: 's', example: { word: 'cent' } },
                { ipa: 'ʃ', example: { word: 'ocean' } }
            ],
        },
    ],
};


//***************
//****** D ******
//***************
export const EN_D: Letter = {
    order: 4,
    names: ['D'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'D', lower: 'd' } },
    codepoints: [
        { char: 'D', unicode: 'U+0044', ascii: 68, oct: '104', hex: '44', bin: '01000100' },
        { char: 'd', unicode: 'U+0064', ascii: 100, oct: '144', hex: '64', bin: '01100100' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'd', example: { word: 'dog' } }
            ],
        },
    ],
};


//***************
//****** E ******
//***************
export const EN_E: Letter = {
    order: 5,
    names: ['E'],
    category: 'vowel',
    glyphs: { script: 'Latin', forms: { upper: 'E', lower: 'e' } },
    codepoints: [
        { char: 'E', unicode: 'U+0045', ascii: 69, oct: '105', hex: '45', bin: '01000101' },
        { char: 'e', unicode: 'U+0065', ascii: 101, oct: '145', hex: '65', bin: '01100101' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'iː', example: { word: 'me' } },
                { ipa: 'ɛ', example: { word: 'bed' } },
                { ipa: 'ə', example: { word: 'the' } }
            ],
        },
    ],
};


//***************
//****** F ******
//***************
export const EN_F: Letter = {
    order: 6,
    names: ['F'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'F', lower: 'f' } },
    codepoints: [
        { char: 'F', unicode: 'U+0046', ascii: 70, oct: '106', hex: '46', bin: '01000110' },
        { char: 'f', unicode: 'U+0066', ascii: 102, oct: '146', hex: '66', bin: '01100110' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'f', example: { word: 'fish' } }
            ],
        },
    ],
};


//***************
//****** G ******
//***************
export const EN_G: Letter = {
    order: 7,
    names: ['G'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'G', lower: 'g' } },
    codepoints: [
        { char: 'G', unicode: 'U+0047', ascii: 71, oct: '107', hex: '47', bin: '01000111' },
        { char: 'g', unicode: 'U+0067', ascii: 103, oct: '147', hex: '67', bin: '01100111' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'g', example: { word: 'go' } },
                { ipa: 'dʒ', example: { word: 'giant' } },
                { ipa: 'ʒ', example: { word: 'genre' } }
            ],
        },
    ],
};


//***************
//****** H ******
//***************
export const EN_H: Letter = {
    order: 8,
    names: ['H'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'H', lower: 'h' } },
    codepoints: [
        { char: 'H', unicode: 'U+0048', ascii: 72, oct: '110', hex: '48', bin: '01001000' },
        { char: 'h', unicode: 'U+0068', ascii: 104, oct: '150', hex: '68', bin: '01101000' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'h', example: { word: 'hat' } }
            ],
        },
    ],
};


//***************
//****** I ******
//***************
export const EN_I: Letter = {
    order: 9,
    names: ['I'],
    category: 'vowel',
    glyphs: { script: 'Latin', forms: { upper: 'I', lower: 'i' } },
    codepoints: [
        { char: 'I', unicode: 'U+0049', ascii: 73, oct: '111', hex: '49', bin: '01001001' },
        { char: 'i', unicode: 'U+0069', ascii: 105, oct: '151', hex: '69', bin: '01101001' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'aɪ', example: { word: 'time' } },
                { ipa: 'ɪ', example: { word: 'sit' } },
                { ipa: 'iː', example: { word: 'machine' } }
            ],
        },
    ],
};


//***************
//****** J ******
//***************
export const EN_J: Letter = {
    order: 10,
    names: ['J'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'J', lower: 'j' } },
    codepoints: [
        { char: 'J', unicode: 'U+004A', ascii: 74, oct: '112', hex: '4a', bin: '01001010' },
        { char: 'j', unicode: 'U+006A', ascii: 106, oct: '152', hex: '6a', bin: '01101010' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'dʒ', example: { word: 'jam' } }
            ],
        },
    ],
};


//***************
//****** K ******
//***************
export const EN_K: Letter = {
    order: 11,
    names: ['K'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'K', lower: 'k' } },
    codepoints: [
        { char: 'K', unicode: 'U+004B', ascii: 75, oct: '113', hex: '4b', bin: '01001011' },
        { char: 'k', unicode: 'U+006B', ascii: 107, oct: '153', hex: '6b', bin: '01101011' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'k', example: { word: 'kite' } }
            ],
        },
    ],
};


//***************
//****** L ******
//***************
export const EN_L: Letter = {
    order: 12,
    names: ['L'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'L', lower: 'l' } },
    codepoints: [
        { char: 'L', unicode: 'U+004C', ascii: 76, oct: '114', hex: '4c', bin: '01001100' },
        { char: 'l', unicode: 'U+006C', ascii: 108, oct: '154', hex: '6c', bin: '01101100' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'l', example: { word: 'look' } },
                { ipa: 'ɫ', example: { word: 'full' } }
            ],
        },
    ],
};


//***************
//****** M ******
//***************
export const EN_M: Letter = {
    order: 13,
    names: ['M'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'M', lower: 'm' } },
    codepoints: [
        { char: 'M', unicode: 'U+004D', ascii: 77, oct: '115', hex: '4d', bin: '01001101' },
        { char: 'm', unicode: 'U+006D', ascii: 109, oct: '155', hex: '6d', bin: '01101101' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'm', example: { word: 'man' } }
            ],
        },
    ],
};


//***************
//****** N ******
//***************
export const EN_N: Letter = {
    order: 14,
    names: ['N'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'N', lower: 'n' } },
    codepoints: [
        { char: 'N', unicode: 'U+004E', ascii: 78, oct: '116', hex: '4e', bin: '01001110' },
        { char: 'n', unicode: 'U+006E', ascii: 110, oct: '156', hex: '6e', bin: '01101110' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'n', example: { word: 'no' } }
            ],
        },
    ],
};


//***************
//****** O ******
//***************
export const EN_O: Letter = {
    order: 15,
    names: ['O'],
    category: 'vowel',
    glyphs: { script: 'Latin', forms: { upper: 'O', lower: 'o' } },
    codepoints: [
        { char: 'O', unicode: 'U+004F', ascii: 79, oct: '117', hex: '4f', bin: '01001111' },
        { char: 'o', unicode: 'U+006F', ascii: 111, oct: '157', hex: '6f', bin: '01101111' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'oʊ', example: { word: 'go' } },
                { ipa: 'ɑ', example: { word: 'not' } },
                { ipa: 'ʌ', example: { word: 'love' } },
                { ipa: 'uː', example: { word: 'do' } }
            ],
        },
    ],
};


//***************
//****** P ******
//***************
export const EN_P: Letter = {
    order: 16,
    names: ['P'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'P', lower: 'p' } },
    codepoints: [
        { char: 'P', unicode: 'U+0050', ascii: 80, oct: '120', hex: '50', bin: '01010000' },
        { char: 'p', unicode: 'U+0070', ascii: 112, oct: '160', hex: '70', bin: '01110000' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'p', example: { word: 'pen' } }
            ],
        },
    ],
};


//***************
//****** Q ******
//***************
export const EN_Q: Letter = {
    order: 17,
    names: ['Q'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'Q', lower: 'q' } },
    codepoints: [
        { char: 'Q', unicode: 'U+0051', ascii: 81, oct: '121', hex: '51', bin: '01010001' },
        { char: 'q', unicode: 'U+0071', ascii: 113, oct: '161', hex: '71', bin: '01110001' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'kw', example: { word: 'quick' } },
                { ipa: 'k', example: { word: 'Iraq' } }
            ],
        },
    ],
};


//***************
//****** R ******
//***************
export const EN_R: Letter = {
    order: 18,
    names: ['R'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'R', lower: 'r' } },
    codepoints: [
        { char: 'R', unicode: 'U+0052', ascii: 82, oct: '122', hex: '52', bin: '01010010' },
        { char: 'r', unicode: 'U+0072', ascii: 114, oct: '162', hex: '72', bin: '01110010' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'ɹ', example: { word: 'red' } }
            ],
        },
    ],
};


//***************
//****** S ******
//***************
export const EN_S: Letter = {
    order: 19,
    names: ['S'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'S', lower: 's' } },
    codepoints: [
        { char: 'S', unicode: 'U+0053', ascii: 83, oct: '123', hex: '53', bin: '01010011' },
        { char: 's', unicode: 'U+0073', ascii: 115, oct: '163', hex: '73', bin: '01110011' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 's', example: { word: 'see' } },
                { ipa: 'z', example: { word: 'rose' } },
                { ipa: 'ʃ', example: { word: 'sure' } },
                { ipa: 'ʒ', example: { word: 'measure' } }
            ],
        },
    ],
};


//***************
//****** T ******
//***************
export const EN_T: Letter = {
    order: 20,
    names: ['T'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'T', lower: 't' } },
    codepoints: [
        { char: 'T', unicode: 'U+0054', ascii: 84, oct: '124', hex: '54', bin: '01010100' },
        { char: 't', unicode: 'U+0074', ascii: 116, oct: '164', hex: '74', bin: '01110100' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 't', example: { word: 'top' } },
                { ipa: 'ɾ', example: { word: 'water' } },
                { ipa: 'tʃ', example: { word: 'nature' } }
            ],
        },
    ],
};


//***************
//****** U ******
//***************
export const EN_U: Letter = {
    order: 21,
    names: ['U'],
    category: 'vowel',
    glyphs: { script: 'Latin', forms: { upper: 'U', lower: 'u' } },
    codepoints: [
        { char: 'U', unicode: 'U+0055', ascii: 85, oct: '125', hex: '55', bin: '01010101' },
        { char: 'u', unicode: 'U+0075', ascii: 117, oct: '165', hex: '75', bin: '01110101' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'uː', example: { word: 'flute' } },
                { ipa: 'ʊ', example: { word: 'put' } },
                { ipa: 'ʌ', example: { word: 'cut' } },
                { ipa: 'juː', example: { word: 'use' } }
            ],
        },
    ],
};


//***************
//****** V ******
//***************
export const EN_V: Letter = {
    order: 22,
    names: ['V'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'V', lower: 'v' } },
    codepoints: [
        { char: 'V', unicode: 'U+0056', ascii: 86, oct: '126', hex: '56', bin: '01010110' },
        { char: 'v', unicode: 'U+0076', ascii: 118, oct: '166', hex: '76', bin: '01110110' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'v', example: { word: 'van' } }
            ],
        },
    ],
};


//***************
//****** W ******
//***************
export const EN_W: Letter = {
    order: 23,
    names: ['W'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'W', lower: 'w' } },
    codepoints: [
        { char: 'W', unicode: 'U+0057', ascii: 87, oct: '127', hex: '57', bin: '01010111' },
        { char: 'w', unicode: 'U+0077', ascii: 119, oct: '167', hex: '77', bin: '01110111' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'w', example: { word: 'wet' } }
            ],
        },
    ],
};


//***************
//****** X ******
//***************
export const EN_X: Letter = {
    order: 24,
    names: ['X'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'X', lower: 'x' } },
    codepoints: [
        { char: 'X', unicode: 'U+0058', ascii: 88, oct: '130', hex: '58', bin: '01011000' },
        { char: 'x', unicode: 'U+0078', ascii: 120, oct: '170', hex: '78', bin: '01111000' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'ks', example: { word: 'box' } },
                { ipa: 'gz', example: { word: 'exam' } },
                { ipa: 'z', example: { word: 'xylophone' } }
            ],
        },
    ],
};


//***************
//****** Y ******
//***************
export const EN_Y: Letter = {
    order: 25,
    names: ['Y'],
    category: 'other',
    glyphs: { script: 'Latin', forms: { upper: 'Y', lower: 'y' } },
    codepoints: [
        { char: 'Y', unicode: 'U+0059', ascii: 89, oct: '131', hex: '59', bin: '01011001' },
        { char: 'y', unicode: 'U+0079', ascii: 121, oct: '171', hex: '79', bin: '01111001' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'j', example: { word: 'yes' } },
                { ipa: 'aɪ', example: { word: 'my' } },
                { ipa: 'ɪ', example: { word: 'gym' } },
                { ipa: 'i', example: { word: 'happy' } }
            ],
        },
    ],
};


//***************
//****** Z ******
//***************
export const EN_Z: Letter = {
    order: 26,
    names: ['Z'],
    category: 'consonant',
    glyphs: { script: 'Latin', forms: { upper: 'Z', lower: 'z' } },
    codepoints: [
        { char: 'Z', unicode: 'U+005A', ascii: 90, oct: '132', hex: '5a', bin: '01011010' },
        { char: 'z', unicode: 'U+007A', ascii: 122, oct: '172', hex: '7a', bin: '01111010' },
    ],
    phonology: [
        {
            dialect: enGA,
            phonemes: [
                { ipa: 'z', example: { word: 'zoo' } }
            ],
        },
    ],
};


//*====================================/
//*======== ASSEMBLED ALPHABET ========/
//*====================================/
export const englishAlphabet: Letter[] = [
    EN_A, EN_B, EN_C, EN_D, EN_E, EN_F, EN_G,
    EN_H, EN_I, EN_J, EN_K,
    EN_L, EN_M, EN_N, EN_O, EN_P,
    EN_Q, EN_R, EN_S,
    EN_T, EN_U, EN_V,
    EN_W, EN_X,
    EN_Y, EN_Z
]


//*====================================/
//*======== ASSEMBLED LANGUAGE ========/
//*====================================/
export const English: Language = {
    name: 'English',
    nick: 'English',
    abbr: 'EN',
    alphabet: englishAlphabet,
    script: 'Latin',
}
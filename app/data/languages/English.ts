import { Language, Letter } from '@/app/types/types';


//***************/
//****** A ******/
//***************/
export const EN_A: Letter = {
    order: 1,
    names: ["A"],
    category: "vowel",
    glyphs: { script: "Latin", forms: { upper: "A", lower: "a" } },
    codepoints: [
        { char: "A", unicode: "U+0041", ascii: 65, oct: '101', hex: '41', bin: '01000001' },
        { char: "a", unicode: "U+0061", ascii: 97, oct: '141', hex: '61', bin: '01100001' }
    ],
    phonemes: [
        { ipa: "eɪ", example: { word: "late" } },
        { ipa: "æ", example: { word: "cat" } }
    ],
    translit: { Hebrew: ["א"], Arabic: ["ا"] }
};


//***************/
//****** B ******/
//***************/
export const EN_B: Letter = {
    order: 2,
    names: ["B"],
    category: "consonant",
    glyphs: { script: "Latin", forms: { upper: "B", lower: "b" } },
    codepoints: [
        { char: "B", unicode: "U+0042", ascii: 66, oct: '102', hex: '42', bin: '01000010' },
        { char: "b", unicode: "U+0062", ascii: 98, oct: '142', hex: '62', bin: '01100010' }
    ],
    phonemes: [
        { ipa: "eɪ", example: { word: "late" } },
        { ipa: "æ", example: { word: "cat" } }
    ],
    translit: { Hebrew: ["א"], Arabic: ["ا"] }
};


//*====================================/
//*======== ASSEMBLED ALPHABET ========/
//*====================================/
export const englishAlphabet2: Letter[] = [
    EN_A, 
    EN_B
]

export const englishAlphabet: string[][] = [
    ['A', 'a'],
    ['B', 'b'],
    ['C', 'c'],
    ['D', 'd'],
    ['E', 'e'],
    ['F', 'f'],
    ['G', 'g'],
    ['H', 'h'],
    ['I', 'i'],
    ['J', 'j'],
    ['K', 'k'],
    ['L', 'l'],
    ['M', 'm'],
    ['N', 'n'],
    ['O', 'o'],
    ['P', 'p'],
    ['Q', 'q'],
    ['R', 'r'],
    ['S', 's'],
    ['T', 't'],
    ['U', 'u'],
    ['V', 'v'],
    ['W', 'w'],
    ['X', 'x'],
    ['Y', 'y'],
    ['Z', 'z']
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
    leftToRight: true
}

// export const English: Language = {
//     name: 'English',
//     nick: 'English',
//     abbr: 'EN',
//     alphabet: englishAlphabet2,
//     script: 'Latin',
//     leftToRight: true
// }
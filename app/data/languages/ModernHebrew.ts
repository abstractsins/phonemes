import { Language, LetterTuple } from "@/app/types/types";

const hebrewAlphabet: LetterTuple[] = [
    ['א', ''],
    ['ב', ''],
    ['ג', ''],
    ['ד', ''],
    ['ה', ''],
    ['ו', ''],
    ['ז', ''],
    ['ח', ''],
    ['ט', ''],
    ['י', ''],
    [ 'כ', 'ך'],
    ['ל', ''],
    [ 'מ', 'ם'],
    [ 'נ', 'ן'],
    ['ס', ''],
    ['ע', ''],
    [ 'פ', 'ף'],
    [ 'צ', 'ץ'],
    ['ק', ''],
    ['ר', ''],
    ['ש', ''],
    ['ת', '']
]

export const ModernHebrew: Language = {
    name: "Modern Hebrew",
    nick: "Hebrew",
    abbr: "MH",
    alphabet: hebrewAlphabet,
    script: 'Hebrew',
    leftToRight: false
}


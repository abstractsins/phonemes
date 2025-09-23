import { Language, Letter } from '@/app/types/types';
import { arMSA } from '../dialects/dialects';

// Helper to generate codepoint metadata (keeps hex/bin correct)
const cp = (char: string, name: string) => {
    const code = char.codePointAt(0)!;
    return {
        char,
        unicode: 'U+' + code.toString(16).toUpperCase().padStart(4, '0'),
        ascii: code,
        oct: code.toString(8),
        hex: code.toString(16),
        bin: code.toString(2).padStart(16, '0'),
        name,
    };
};

//***************
//****** ء ******
//***************
export const AR_HAMZA: Letter = {
    order: 0, // keep 1–28 canonical; hamza explicit at 0
    names: [
        {
            char: 'Hamza',
            spellings: ['Hamza'],
            phonetics: { dictionary: 'häm-za', ipa: 'ˈʔamza' },
        },
    ],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ء' },
        presentation: { isolated: 'ﺀ' }, // U+FE80
        joining: 'none',
    },
    codepoints: [cp('ء', 'ARABIC LETTER HAMZA')],
    phonology: [
        {
            dialect: arMSA,
            phonemes: [
                { ipa: 'ʔ', example: { word: 'أم', gloss: 'mother' }, envNote: 'on alif (أ)' },
                { ipa: 'ʔ', example: { word: 'مؤمن', gloss: 'believer' }, envNote: 'on waw (ؤ)' },
                { ipa: 'ʔ', example: { word: 'مسألة', gloss: 'issue' }, envNote: 'on ya (ئ)' },
            ],
        },
    ],
};

//***************
//****** ا ******
//***************
export const AR_ALIF: Letter = {
    order: 1,
    names: [
        { char: 'Alif', spellings: ['Alif', 'Alef'], phonetics: { dictionary: 'ä-lif', ipa: 'ˈʔalif' } },
    ],
    category: 'matres',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ا', final: 'ا' },
        presentation: { isolated: 'ﺍ', final: 'ﺎ' }, // U+FE8D/U+FE8E
        joining: 'right',
    },
    codepoints: [cp('ا', 'ARABIC LETTER ALEF')],
    phonology: [
        {
            dialect: arMSA,
            phonemes: [
                { ipa: 'aː', example: { word: 'باب', gloss: 'door' }, envNote: 'long vowel (mater)' },
            ],
            note: 'Hamza on a carrier (أ/إ/ؤ/ئ) is modeled under AR_HAMZA.',
        },
    ],
};

//***************
//****** ب ******
//***************
export const AR_BA: Letter = {
    order: 2,
    names: [{ char: 'Ba', spellings: ['Ba'], phonetics: { dictionary: 'bä', ipa: 'baːʔ' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ب', final: 'ب', initial: 'ب', medial: 'ب' },
        presentation: { isolated: 'ﺏ', final: 'ﺐ', initial: 'ﺑ', medial: 'ﺒ' }, // U+FE8F..FE92
        joining: 'dual',
    },
    codepoints: [cp('ب', 'ARABIC LETTER BEH')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'b', example: { word: 'بيت', gloss: 'house' } }] }],
};

//***************
//****** ت ******
//***************
export const AR_TA: Letter = {
    order: 3,
    names: [{ char: 'Ta', spellings: ['Ta'], phonetics: { dictionary: 'tä', ipa: 'taːʔ' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ت', final: 'ت', initial: 'ت', medial: 'ت' },
        presentation: { isolated: 'ﺕ', final: 'ﺖ', initial: 'ﺗ', medial: 'ﺘ' }, // U+FE95..FE98
        joining: 'dual',
    },
    codepoints: [cp('ت', 'ARABIC LETTER TEH')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 't', example: { word: 'تفاح', gloss: 'apple' } }] }],
};

//***************
//****** ث ******
//***************
export const AR_THA: Letter = {
    order: 4,
    names: [{ char: 'Tha', spellings: ['Tha'], phonetics: { dictionary: 'thä', ipa: 'θaːʔ' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ث', final: 'ث', initial: 'ث', medial: 'ث' },
        presentation: { isolated: 'ﺙ', final: 'ﺚ', initial: 'ﺛ', medial: 'ﺜ' }, // U+FE99..FE9C
        joining: 'dual',
    },
    codepoints: [cp('ث', 'ARABIC LETTER THEH')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'θ', example: { word: 'ثلاثة', gloss: 'three' } }] }],
};

//***************
//****** ج ******
//***************
export const AR_JIM: Letter = {
    order: 5,
    names: [{ char: 'Jim', spellings: ['Jim'], phonetics: { dictionary: 'jēm', ipa: 'dʒiːm' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ج', final: 'ج', initial: 'ج', medial: 'ج' },
        presentation: { isolated: 'ﺝ', final: 'ﺞ', initial: 'ﺟ', medial: 'ﺠ' }, // U+FE9D..FEA0
        joining: 'dual',
    },
    codepoints: [cp('ج', 'ARABIC LETTER JEEM')],
    phonology: [
        {
            dialect: arMSA,
            phonemes: [{ ipa: 'dʒ', example: { word: 'جمل', gloss: 'camel' } }],
            note: 'Realizes as [ɡ]/[ʒ] in some dialects',
        },
    ],
};

//***************
//****** ح ******
//***************
export const AR_HA_DOTLESS: Letter = {
    order: 6,
    names: [{ char: 'Ḥa', spellings: ['Ha'], phonetics: { dictionary: 'ẖä', ipa: 'ħaːʔ' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ح', final: 'ح', initial: 'ح', medial: 'ح' },
        presentation: { isolated: 'ﺡ', final: 'ﺢ', initial: 'ﺣ', medial: 'ﺤ' }, // U+FEA1..FEA4
        joining: 'dual',
    },
    codepoints: [cp('ح', 'ARABIC LETTER HAH')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'ħ', example: { word: 'حب', gloss: 'love/seed' } }] }],
};

//***************
//****** خ ******
//***************
export const AR_KHA: Letter = {
    order: 7,
    names: [{ char: 'Kha', spellings: ['Kha'], phonetics: { dictionary: 'khä', ipa: 'xaːʔ' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'خ', final: 'خ', initial: 'خ', medial: 'خ' },
        presentation: { isolated: 'ﺥ', final: 'ﺦ', initial: 'ﺧ', medial: 'ﺨ' }, // U+FEA5..FEA8
        joining: 'dual',
    },
    codepoints: [cp('خ', 'ARABIC LETTER KHAH')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'x', example: { word: 'خبز', gloss: 'bread' } }] }],
};

//***************
//****** د ******
//***************
export const AR_DAL: Letter = {
    order: 8,
    names: [{ char: 'Dal', spellings: ['Dal'], phonetics: { dictionary: 'däl', ipa: 'daːl' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'د', final: 'د' },
        presentation: { isolated: 'ﺩ', final: 'ﺪ' }, // U+FEA9/U+FEAA
        joining: 'right',
    },
    codepoints: [cp('د', 'ARABIC LETTER DAL')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'd', example: { word: 'درس', gloss: 'lesson' } }] }],
};

//***************
//****** ذ ******
//***************
export const AR_DHAL: Letter = {
    order: 9,
    names: [{ char: 'Dhal', spellings: ['Dhal'], phonetics: { dictionary: 'ðäl', ipa: 'ðaːl' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ذ', final: 'ذ' },
        presentation: { isolated: 'ﺫ', final: 'ﺬ' }, // U+FEAB/U+FEAC
        joining: 'right',
    },
    codepoints: [cp('ذ', 'ARABIC LETTER THAL')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'ð', example: { word: 'ذهب', gloss: 'gold' } }] }],
};

//***************
//****** ر ******
//***************
export const AR_RA: Letter = {
    order: 10,
    names: [{ char: 'Ra', spellings: ['Ra'], phonetics: { dictionary: 'rä', ipa: 'raːʔ' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ر', final: 'ر' },
        presentation: { isolated: 'ﺭ', final: 'ﺮ' }, // U+FEAD/U+FEAE
        joining: 'right',
    },
    codepoints: [cp('ر', 'ARABIC LETTER REH')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'r', example: { word: 'رجل', gloss: 'man' } }] }],
};

//***************
//****** ز ******
//***************
export const AR_ZAY: Letter = {
    order: 11,
    names: [{ char: 'Zay', spellings: ['Zay', 'Zain'], phonetics: { dictionary: 'zāy', ipa: 'zaːj' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ز', final: 'ز' },
        presentation: { isolated: 'ﺯ', final: 'ﺰ' }, // U+FEAF/U+FEB0
        joining: 'right',
    },
    codepoints: [cp('ز', 'ARABIC LETTER ZAIN')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'z', example: { word: 'زيت', gloss: 'oil' } }] }],
};

//***************
//****** س ******
//***************
export const AR_SIN: Letter = {
    order: 12,
    names: [{ char: 'Sin', spellings: ['Sin'], phonetics: { dictionary: 'sēn', ipa: 'siːn' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'س', final: 'س', initial: 'س', medial: 'س' },
        presentation: { isolated: 'ﺱ', final: 'ﺲ', initial: 'ﺳ', medial: 'ﺴ' }, // U+FEB1..FEB4
        joining: 'dual',
    },
    codepoints: [cp('س', 'ARABIC LETTER SEEN')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 's', example: { word: 'سلام', gloss: 'peace' } }] }],
};

//***************
//****** ش ******
//***************
export const AR_SHIN: Letter = {
    order: 13,
    names: [{ char: 'Shin', spellings: ['Shin'], phonetics: { dictionary: 'shēn', ipa: 'ʃiːn' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ش', final: 'ش', initial: 'ش', medial: 'ش' },
        presentation: { isolated: 'ﺵ', final: 'ﺶ', initial: 'ﺷ', medial: 'ﺸ' }, // U+FEB5..FEB8
        joining: 'dual',
    },
    codepoints: [cp('ش', 'ARABIC LETTER SHEEN')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'ʃ', example: { word: 'شمس', gloss: 'sun' } }] }],
};

//***************
//****** ص ******
//***************
export const AR_SAD: Letter = {
    order: 14,
    names: [{ char: 'Ṣad', spellings: ['Sad'], phonetics: { dictionary: 'ṣād', ipa: 'sˤaːd' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ص', final: 'ص', initial: 'ص', medial: 'ص' },
        presentation: { isolated: 'ﺹ', final: 'ﺺ', initial: 'ﺻ', medial: 'ﺼ' }, // U+FEB9..FEBC
        joining: 'dual',
    },
    codepoints: [cp('ص', 'ARABIC LETTER SAD')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'sˤ', example: { word: 'صباح', gloss: 'morning' } }] }],
};

//***************
//****** ض ******
//***************
export const AR_DAD: Letter = {
    order: 15,
    names: [{ char: 'Ḍad', spellings: ['Dad'], phonetics: { dictionary: 'ḍād', ipa: 'dˤaːd' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ض', final: 'ض', initial: 'ض', medial: 'ض' },
        presentation: { isolated: 'ﺽ', final: 'ﺾ', initial: 'ﺿ', medial: 'ﻀ' }, // U+FEBD..FEC0
        joining: 'dual',
    },
    codepoints: [cp('ض', 'ARABIC LETTER DAD')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'dˤ', example: { word: 'ضباب', gloss: 'fog' } }] }],
};

//***************
//****** ط ******
//***************
export const AR_TTA: Letter = {
    order: 16,
    names: [{ char: 'Ṭa', spellings: ['Ta', 'Ṭāʼ'], phonetics: { dictionary: 'ṭā', ipa: 'tˤaːʔ' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ط', final: 'ط', initial: 'ط', medial: 'ط' },
        presentation: { isolated: 'ﻁ', final: 'ﻂ', initial: 'ﻃ', medial: 'ﻄ' }, // U+FEC1..FEC4
        joining: 'dual',
    },
    codepoints: [cp('ط', 'ARABIC LETTER TAH')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'tˤ', example: { word: 'طعام', gloss: 'food' } }] }],
};

//***************
//****** ظ ******
//***************
export const AR_ZHA: Letter = {
    order: 17,
    names: [{ char: 'Ẓa', spellings: ['Za'], phonetics: { dictionary: 'ẓā', ipa: 'zˤaːʔ' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ظ', final: 'ظ', initial: 'ظ', medial: 'ظ' },
        presentation: { isolated: 'ﻅ', final: 'ﻆ', initial: 'ﻇ', medial: 'ﻈ' }, // U+FEC5..FEC8
        joining: 'dual',
    },
    codepoints: [cp('ظ', 'ARABIC LETTER ZAH')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'zˤ', example: { word: 'ظرف', gloss: 'envelope' } }] }],
};

//***************
//****** ع ******
//***************
export const AR_AYN: Letter = {
    order: 18,
    names: [{ char: 'Ayn', spellings: ['Ayn'], phonetics: { dictionary: 'ʿayn', ipa: 'ʕajn' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ع', final: 'ع', initial: 'ع', medial: 'ع' },
        presentation: { isolated: 'ﻉ', final: 'ﻊ', initial: 'ﻋ', medial: 'ﻌ' }, // U+FEC9..FECC
        joining: 'dual',
    },
    codepoints: [cp('ع', 'ARABIC LETTER AIN')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'ʕ', example: { word: 'عنب', gloss: 'grapes' } }] }],
};

//***************
//****** غ ******
//***************
export const AR_GHAYN: Letter = {
    order: 19,
    names: [{ char: 'Ghayn', spellings: ['Ghayn'], phonetics: { dictionary: 'ghayn', ipa: 'ɣajn' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'غ', final: 'غ', initial: 'غ', medial: 'غ' },
        presentation: { isolated: 'ﻍ', final: 'ﻎ', initial: 'ﻏ', medial: 'ﻐ' }, // U+FECD..FED0
        joining: 'dual',
    },
    codepoints: [cp('غ', 'ARABIC LETTER GHAIN')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'ɣ', example: { word: 'غيم', gloss: 'clouds' } }] }],
};

//***************
//****** ف ******
//***************
export const AR_FA: Letter = {
    order: 20,
    names: [{ char: 'Fa', spellings: ['Fa'], phonetics: { dictionary: 'fä', ipa: 'faːʔ' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ف', final: 'ف', initial: 'ف', medial: 'ف' },
        presentation: { isolated: 'ﻑ', final: 'ﻒ', initial: 'ﻓ', medial: 'ﻔ' }, // U+FED1..FED4
        joining: 'dual',
    },
    codepoints: [cp('ف', 'ARABIC LETTER FEH')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'f', example: { word: 'فيل', gloss: 'elephant' } }] }],
};

//***************
//****** ق ******
//***************
export const AR_QAF: Letter = {
    order: 21,
    names: [{ char: 'Qaf', spellings: ['Qaf'], phonetics: { dictionary: 'käf (qaf)', ipa: 'qaːf' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ق', final: 'ق', initial: 'ق', medial: 'ق' },
        presentation: { isolated: 'ﻕ', final: 'ﻖ', initial: 'ﻗ', medial: 'ﻘ' }, // U+FED5..FED8
        joining: 'dual',
    },
    codepoints: [cp('ق', 'ARABIC LETTER QAF')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'q', example: { word: 'قمر', gloss: 'moon' } }] }],
};

//***************
//****** ك ******
//***************
export const AR_KAF: Letter = {
    order: 22,
    names: [{ char: 'Kaf', spellings: ['Kaf'], phonetics: { dictionary: 'käf', ipa: 'kaːf' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ك', final: 'ك', initial: 'ك', medial: 'ك' },
        presentation: { isolated: 'ﻙ', final: 'ﻚ', initial: 'ﻛ', medial: 'ﻜ' }, // U+FED9..FEDC
        joining: 'dual',
    },
    codepoints: [cp('ك', 'ARABIC LETTER KAF')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'k', example: { word: 'كتاب', gloss: 'book' } }] }],
};

//***************
//****** ل ******
//***************
export const AR_LAM: Letter = {
    order: 23,
    names: [{ char: 'Lam', spellings: ['Lam'], phonetics: { dictionary: 'läm', ipa: 'laːm' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ل', final: 'ل', initial: 'ل', medial: 'ل' },
        presentation: { isolated: 'ﻝ', final: 'ﻞ', initial: 'ﻟ', medial: 'ﻠ' }, // U+FEDD..FEE0
        joining: 'dual',
    },
    codepoints: [cp('ل', 'ARABIC LETTER LAM')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'l', example: { word: 'لغة', gloss: 'language' } }] }],
};

//***************
//****** م ******
//***************
export const AR_MIM: Letter = {
    order: 24,
    names: [{ char: 'Mim', spellings: ['Mim'], phonetics: { dictionary: 'mēm', ipa: 'miːm' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'م', final: 'م', initial: 'م', medial: 'م' },
        presentation: { isolated: 'ﻡ', final: 'ﻢ', initial: 'ﻣ', medial: 'ﻤ' }, // U+FEE1..FEE4
        joining: 'dual',
    },
    codepoints: [cp('م', 'ARABIC LETTER MEEM')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'm', example: { word: 'مدرسة', gloss: 'school' } }] }],
};

//***************
//****** ن ******
//***************
export const AR_NUN: Letter = {
    order: 25,
    names: [{ char: 'Nun', spellings: ['Nun'], phonetics: { dictionary: 'nūn', ipa: 'nuːn' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ن', final: 'ن', initial: 'ن', medial: 'ن' },
        presentation: { isolated: 'ﻥ', final: 'ﻦ', initial: 'ﻧ', medial: 'ﻨ' }, // U+FEE5..FEE8
        joining: 'dual',
    },
    codepoints: [cp('ن', 'ARABIC LETTER NOON')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'n', example: { word: 'نور', gloss: 'light' } }] }],
};

//***************
//****** ه ******
//***************
export const AR_HA: Letter = {
    order: 26,
    names: [{ char: 'Ha', spellings: ['Ha'], phonetics: { dictionary: 'hä', ipa: 'haːʔ' } }],
    category: 'consonant',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ه', final: 'ه', initial: 'ه', medial: 'ه' },
        presentation: { isolated: 'ﻩ', final: 'ﻪ', initial: 'ﻫ', medial: 'ﻬ' }, // U+FEE9..FEEC
        joining: 'dual',
    },
    codepoints: [cp('ه', 'ARABIC LETTER HEH')],
    phonology: [{ dialect: arMSA, phonemes: [{ ipa: 'h', example: { word: 'هواء', gloss: 'air' } }] }],
};

//***************
//****** و ******
//***************
export const AR_WAW: Letter = {
    order: 27,
    names: [{ char: 'Waw', spellings: ['Waw'], phonetics: { dictionary: 'wäw', ipa: 'waːw' } }],
    category: 'matres',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'و', final: 'و' },
        presentation: { isolated: 'ﻭ', final: 'ﻮ' }, // U+FEED/U+FEEE
        joining: 'right',
    },
    codepoints: [cp('و', 'ARABIC LETTER WAW')],
    phonology: [
        {
            dialect: arMSA,
            phonemes: [
                { ipa: 'w', example: { word: 'ورد', gloss: 'rose' }, envNote: 'consonant' },
                { ipa: 'uː', example: { word: 'نور', gloss: 'light' }, envNote: 'long vowel (mater)' },
            ],
        },
    ],
};

//***************
//****** ي ******
//***************
export const AR_YA: Letter = {
    order: 28,
    names: [{ char: 'Ya', spellings: ['Ya', 'Yāʼ'], phonetics: { dictionary: 'yā', ipa: 'jaːʔ' } }],
    category: 'matres',
    glyphs: {
        script: 'Arabic',
        forms: { isolated: 'ي', final: 'ي', initial: 'ي', medial: 'ي' },
        presentation: { isolated: 'ﻱ', final: 'ﻲ', initial: 'ﻳ', medial: 'ﻴ' }, // U+FEF1..FEF4
        joining: 'dual',
    },
    codepoints: [cp('ي', 'ARABIC LETTER YEH')],
    phonology: [
        {
            dialect: arMSA,
            phonemes: [
                { ipa: 'j', example: { word: 'يد', gloss: 'hand' }, envNote: 'consonant' },
                { ipa: 'iː', example: { word: 'كبير', gloss: 'big' }, envNote: 'long vowel (mater)' },
            ],
        },
    ],
};

//*====================================/
//*======== ASSEMBLED ALPHABET ========/
//*====================================/
export const arabicAlphabet: Letter[] = [
    AR_HAMZA,
    AR_ALIF, AR_BA, AR_TA, AR_THA, AR_JIM, AR_HA_DOTLESS, AR_KHA,
    AR_DAL, AR_DHAL, AR_RA, AR_ZAY, AR_SIN, AR_SHIN,
    AR_SAD, AR_DAD, AR_TTA, AR_ZHA, AR_AYN, AR_GHAYN,
    AR_FA, AR_QAF, AR_KAF, AR_LAM, AR_MIM, AR_NUN,
    AR_HA, AR_WAW, AR_YA,
];

//*====================================/
//*======== ASSEMBLED LANGUAGE ========/
//*====================================/
export const ModernArabic: Language = {
    name: 'Modern Arabic',
    nick: 'Arabic',
    abbr: 'AR',
    alphabet: arabicAlphabet,
    script: 'Arabic',
};

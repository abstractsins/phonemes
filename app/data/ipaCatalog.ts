// ipaCatalog.ts
export type IpaCategory =
    | "plosive" | "nasal" | "fricative" | "affricate"
    | "approximant" | "lateral" | "trill" | "tap/flap" | "vowel" | "other";

export interface IpaInfo {
    symbol: string;      // bare symbol, no slashes, e.g. "ʔ"
    name: string;        // "glottal stop"
    category: IpaCategory;
}

// minimal sample — extend as needed
export const IPA_CATALOG: IpaInfo[] = [
    // =======================
    // PLOSIVES
    // =======================
    { symbol: "p", name: "voiceless bilabial plosive", category: "plosive" },
    { symbol: "b", name: "voiced bilabial plosive", category: "plosive" },
    { symbol: "t", name: "voiceless alveolar plosive", category: "plosive" },
    { symbol: "d", name: "voiced alveolar plosive", category: "plosive" },
    { symbol: "k", name: "voiceless velar plosive", category: "plosive" },
    { symbol: "g", name: "voiced velar plosive", category: "plosive" },
    { symbol: "ʔ", name: "glottal stop (glottal plosive)", category: "plosive" },

    // =======================
    // NASALS
    // =======================
    { symbol: "m", name: "bilabial nasal", category: "nasal" },
    { symbol: "n", name: "alveolar nasal", category: "nasal" },
    { symbol: "ŋ", name: "velar nasal", category: "nasal" },

    // =======================
    // FRICATIVES
    // =======================
    { symbol: "f", name: "voiceless labiodental fricative", category: "fricative" },
    { symbol: "v", name: "voiced labiodental fricative", category: "fricative" },
    { symbol: "s", name: "voiceless alveolar fricative", category: "fricative" },
    { symbol: "z", name: "voiced alveolar fricative", category: "fricative" },
    { symbol: "ʃ", name: "voiceless postalveolar fricative", category: "fricative" }, // “sh”
    { symbol: "ʒ", name: "voiced postalveolar fricative", category: "fricative" },   // “measure”
    { symbol: "h", name: "voiceless glottal fricative", category: "fricative" },
    { symbol: "x", name: "voiceless velar fricative", category: "fricative" },   // e.g. German "Bach"
    { symbol: "χ", name: "voiceless uvular fricative", category: "fricative" },  // Israeli Hebrew "ח"

    // =======================
    // AFFRICATES
    // =======================
    { symbol: "t͡ʃ", name: "voiceless postalveolar affricate", category: "affricate" }, // “ch”
    { symbol: "d͡ʒ", name: "voiced postalveolar affricate", category: "affricate" },   // “j” in judge

    // =======================
    // APPROXIMANTS & LATERALS
    // =======================
    { symbol: "l", name: "alveolar lateral approximant (light l)", category: "lateral" },
    { symbol: "ɫ", name: "velarized alveolar lateral approximant (dark l)", category: "approximant" },
    { symbol: "ɹ", name: "alveolar approximant", category: "approximant" }, // AmEng r
    { symbol: "j", name: "palatal approximant", category: "approximant" },  // “y”
    { symbol: "w", name: "labio-velar approximant", category: "approximant" },

    // =======================
    // VOWELS
    // =======================
    { symbol: "i", name: "close front unrounded vowel", category: "vowel" },      // “ee”
    { symbol: "ɪ", name: "near-close near-front unrounded vowel", category: "vowel" }, // “bit”
    { symbol: "e", name: "close-mid front unrounded vowel", category: "vowel" },
    { symbol: "ɛ", name: "open-mid front unrounded vowel", category: "vowel" },  // “bet”
    { symbol: "æ", name: "near-open front unrounded vowel", category: "vowel" }, // “cat”
    { symbol: "ɑ", name: "open back unrounded vowel", category: "vowel" },       // “father”
    { symbol: "ʌ", name: "open-mid back unrounded vowel", category: "vowel" },   // “strut”
    { symbol: "ɔ", name: "open-mid back rounded vowel", category: "vowel" },     // “thought”
    { symbol: "o", name: "close-mid back rounded vowel", category: "vowel" },
    { symbol: "u", name: "close back rounded vowel", category: "vowel" },        // “goose”
    { symbol: "ʊ", name: "near-close near-back rounded vowel", category: "vowel" }, // “foot”
    { symbol: "ə", name: "mid central vowel (schwa)", category: "vowel" },       // “sofa”

    // =======================
    // DIPHTHONGS (subset)
    // =======================
    { symbol: "aɪ", name: "diphthong (as in 'price')", category: "vowel" },
    { symbol: "eɪ", name: "diphthong (as in 'face')", category: "vowel" },
    { symbol: "oʊ", name: "diphthong (as in 'goat')", category: "vowel" },
    { symbol: "aʊ", name: "diphthong (as in 'mouth')", category: "vowel" },
    { symbol: "ɔɪ", name: "diphthong (as in 'choice')", category: "vowel" },

    // =======================
    // TAPS & TRILLS
    // =======================
    { symbol: "ɾ", name: "voiced alveolar tap (flap)", category: "tap/flap" },   // "water" (AmE)
    { symbol: "r", name: "alveolar trill", category: "trill" }, // Spanish "perro"
];

export const IPA_MAP: Record<string, IpaInfo> =
    Object.fromEntries(IPA_CATALOG.map(i => [i.symbol, i]));

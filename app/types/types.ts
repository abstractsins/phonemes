import { IPA } from './ipa'

export type ScriptName = 'Arabic' | 'Hebrew' | 'Latin';

export type LanguageName = string;

export type DialectName = 'General American' | 'Received Pronunciation' | 'Canadian' | 'Australian' | 'Israeli Hebrew' | 'Modern Standard Arabic';

export type DialectId = 'en-GA' | 'en-RP' | 'he-IL' | 'ar-MSA';

export type Dir = 'ltr' | 'rtl';

export type IpaToLetterMatch = [Letter, ScriptName];



//* --------------------------------------------------//
//* -------------------- Metadata --------------------//
//* --------------------------------------------------//
export interface ScriptMeta {
    name: ScriptName;
    label: string;
    dir: Dir;
    upperCase: boolean;
    languages: Record<string, Language>;
    defaultLanguage: string;
    firstThree: string;
}

export type TransliterationMap = {
    // default translit into target languages/scripts; multiple options allowed
    [target in LanguageName | ScriptName]?: string[];
};

export type phonemeExample = { word: string; gloss?: string };

export interface Phoneme {
    ipa: IPA;                   // e.g., 'b', 's', 'ʃ'
    envNote?: string;           // context note: 'before front vowels', etc.
    example?: phonemeExample;
}

export type Dialect = {
    id: DialectId;
    name: DialectName;
}



//* --------------------------------------------------//
//* ---------- Script-specific glyph forms -----------//
//* --------------------------------------------------//

export type LatinGlyphs = {
    script: 'Latin';
    forms: {
        upper: string;           // 'A'
        lower: string;           // 'a'
    };
};

export type HebrewGlyphs = {
    script: 'Hebrew';
    forms: {
        standard: string;           // 'כ'
        dagesh?: boolean;
        final?: string;             // 'ך' (sofit) — present only for 5 letters
    };
};

export type ArabicJoining = 'dual' | 'right' | 'none';

export type ArabicGlyphs = {
    script: 'Arabic';
    joining: ArabicJoining;      // e.g., 'dual' for most letters, 'right' for د/ذ/ر/ز/و, 'none' for standalone marks
    forms: {
        isolated: string;        // 'ب',  base codepoint (U+0628) — rely on font shaping
        initial?: string;        // 'ب'
        medial?: string;         // 'ب'
        final?: string;          // 'ب'
    };
    presentation: {
        isolated: string;       // 'ﺏ',    U+FE8F
        initial?: string;       // 'ﺐ',    U+FE90
        medial?: string;        // 'ﺑ',    U+FE91
        final?: string;         // 'ﺒ',    U+FE92
    }
};

export type Glyphs = ArabicGlyphs | LatinGlyphs | HebrewGlyphs;

//* --------------------------------------------------//
//* ---------- Script-specific glyph forms -----------//
//* --------------------------------------------------//

export interface LetterName {
    char: string; // 'M'
    spellings: string[]; // ['Em']
    phonetics: { dictionary: string; ipa: string };
}

export interface Letter {
    order: number;              // alphabetical order inside the language
    names: LetterName[];
    codepoints: Codepoint[];    // list if multiple forms matter
    glyphs: Glyphs;             // script-aware forms above
    phonology: DialectPhonology[];        // one letter may be multiple phonemes contextually
    category?: 'consonant' | 'vowel' | 'matres' | 'diacritic' | 'ligature' | 'other';
    translit?: TransliterationMap;
    notes?: string;
}

export interface Language {
    name: LanguageName;
    nick: string;
    abbr: string;
    alphabet: Letter[];
    script: ScriptName;
}

export interface DialectPhonology {
    dialect: Dialect;
    phonemes: Phoneme[];
    note?: string;
}

export interface DialectInfo {
    name: DialectName;   // 'General American'
    abbr: string;        // 'GA'
    note?: string;       // shown in tooltip
}

export interface Codepoint {
    char: string;               // the literal character
    unicode: string;            // 'U+05DB'
    ascii: number;              // '63'
    oct: string;                // '040'
    hex: string;                // '2E'
    bin: string;                // '00100111'
    name?: string;              // 'HEBREW LETTER KAF'
}



// Optional helper: pick the display form by context
export type DisplayContext =
    | { script: 'Latin'; case: 'upper' | 'lower' }
    | { script: 'Hebrew'; position?: 'standard' | 'final' }
    | { script: 'Arabic'; position: 'isolated' | 'initial' | 'medial' | 'final' };

// Type guard to help JSX: narrows `Glyphs` to the exact arm by script
export function isGlyphs<S extends Glyphs['script']>(
    g: Glyphs,
    script: S
): g is Extract<Glyphs, { script: S }> {
    return g.script === script;
}

export function pickForm(letter: Letter, ctx: DisplayContext): string {
    const g = letter.glyphs;
    if (g.script === 'Latin' && ctx.script === 'Latin') {
        return ctx.case === 'upper' ? g.forms.upper : g.forms.lower;
    }
    if (g.script === 'Hebrew' && ctx.script === 'Hebrew') {
        return (ctx.position === 'final' && g.forms.final) ? g.forms.final : g.forms.standard;
    }
    if (g.script === 'Arabic' && ctx.script === 'Arabic') {
        return g.forms[ctx.position] ?? g.forms.isolated;
    }
    return 'error, bad input';
}


//* --------------------------------------------------//
//* ----------------- API Responses ------------------//
//* --------------------------------------------------//

interface ForvoAttributes {
    attributes: number;
}

export interface ForvoItem {
    addtime: string;
    code: string;
    country: string;
    hits: number;
    id: number;
    langname: string;
    num_positive_votes: number;
    num_votes: number;
    original: string;
    pathmp3: string;
    pathogg: string;
    rate: number;
    sex: string;
    username: string;
    word: string;
}

export interface ForvoResponse {
    attributes: ForvoAttributes;
    items: ForvoItem[];
}
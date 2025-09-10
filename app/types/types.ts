export type ScriptName = "Arabic" | "Hebrew" | "Latin";

export type LanguageName = "English" | "Modern Hebrew" | "Modern Standard Arabic";

export type IPA = string;

export type TransliterationMap = {
    // default translit into target languages/scripts; multiple options allowed
    [target in LanguageName | ScriptName]?: string[];
};

export interface Phoneme {
    ipa: IPA;                   // e.g., "b", "s", "ʃ"
    envNote?: string;           // context note: "before front vowels", etc.
    example?: { word: string; gloss?: string };
}

export interface Codepoint {
    char: string;               // the literal character
    unicode: string;            // "U+05DB"
    ascii: number;              // "63"
    oct: string;                // "040"
    hex: string;                // "2E"
    bin: string;                // "00100111"
    name?: string;              // "HEBREW LETTER KAF"
}



//* --------------------------------------------------
//* ---------- Script-specific glyph forms -----------
//* --------------------------------------------------

export type LatinGlyphs = {
    script: "Latin";
    forms: {
        upper: string;           // "A"
        lower: string;           // "a"
    };
};

export type HebrewGlyphs = {
    script: "Hebrew";
    forms: {
        standard: string;          // "כ"
        final?: string;            // "ך" (sofit) — present only for 5 letters
    };
};

export type ArabicJoining = "dual" | "right" | "none";

export type ArabicGlyphs = {
    script: "Arabic";
    joining: ArabicJoining;      // e.g., "dual" for most letters, "right" for د/ذ/ر/ز/و, "none" for standalone marks
    forms: {
        isolated: string;          // "ب"
        initial?: string;          // "بـ"
        medial?: string;           // "ـبـ"
        final?: string;            // "ـب"
    };
};

export type Glyphs = LatinGlyphs | HebrewGlyphs | ArabicGlyphs;

//* --------------------------------------------------
//* ---------- Script-specific glyph forms -----------
//* --------------------------------------------------



export interface Letter {
    order: number;              // alphabetical order inside the language
    names: string[];            // "A", "Alef", "Bet", "Bā’"
    codepoints: Codepoint[];    // list if multiple forms matter
    glyphs: Glyphs;             // script-aware forms above
    phonemes: Phoneme[];        // one letter may be multiple phonemes contextually
    category?: "consonant" | "vowel" | "matres" | "diacritic" | "ligature" | "other";
    translit?: TransliterationMap;
    notes?: string;
}


export interface Language {
    name: LanguageName;
    nick: string;
    abbr: string;
    alphabet: Letter[];
    script: ScriptName;
    leftToRight: boolean;
}

// Optional helper: pick the display form by context
export type DisplayContext =
    | { script: "Latin"; case: "upper" | "lower" }
    | { script: "Hebrew"; position?: "standard" | "final" }
    | { script: "Arabic"; position: "isolated" | "initial" | "medial" | "final" };

export function pickForm(letter: Letter, ctx: DisplayContext): string {
    const g = letter.glyphs;
    if (g.script === "Latin" && ctx.script === "Latin") {
        return ctx.case === "upper" ? g.forms.upper : g.forms.lower;
    }
    if (g.script === "Hebrew" && ctx.script === "Hebrew") {
        return (ctx.position === "final" && g.forms.final) ? g.forms.final : g.forms.standard;
    }
    if (g.script === "Arabic" && ctx.script === "Arabic") {
        return g.forms[ctx.position] ?? g.forms.isolated;
    }
    // fallback
    return 'error, bad input';
}
// ipaMatch.ts

import {SCRIPTS, ScriptKeys} from '@data/scripts';
import { LanguageKeys, LANGUAGES } from '@/app/data/languages';

import { IPA, IpaToLetterMatch, Language, LanguageName, Letter, ScriptMeta } from "@/app/types/types";
import { IPA_MAP, IpaInfo } from "@data/ipaCatalog";

// known multi-char symbols you support (longest-first for greedy matching)
const MULTI = ["t͡ʃ", "d͡ʒ", "aɪ", "eɪ", "oʊ", "aʊ", "ɔɪ"]; // add more as needed

export function stripSlashes(s: string) {
    return s.trim().replace(/^\/|\/$/g, "");
}

/** Split an IPA string into symbols using longest-match first. */
export function tokenizeIpa(raw: string): string[] {
    const s = stripSlashes(raw);
    const out: string[] = [];
    let i = 0;
    while (i < s.length) {
        // try multi-char matches first
        let hit: string | null = null;
        for (const m of MULTI) {
            if (s.startsWith(m, i)) { hit = m; break; }
        }
        if (hit) { out.push(hit); i += hit.length; continue; }

        // fallback: single char
        out.push(s[i]);
        i += 1;
    }
    return out;
}

export function lookupIpaInfo(symbol: string): IpaInfo | undefined {
    return IPA_MAP[symbol];
}

/** Get info for each symbol in an IPA string. */
export function enrichIpa(raw: string): (IpaInfo | { symbol: string; name?: undefined; category?: undefined })[] {
    return tokenizeIpa(raw).map(sym => lookupIpaInfo(sym) ?? { symbol: sym });
}

export function matchLettersFromIPA(ipa: IPA, currentLanguage: LanguageName): IpaToLetterMatch[] | undefined {
    
    console.log('finding letters excluding: ' + currentLanguage);

    if (!ipa || !currentLanguage) return;

    const letters: IpaToLetterMatch[] = [];

    for (const language in LANGUAGES) {
        const langObj = LANGUAGES[language];
        if (langObj && language !== currentLanguage)
        langObj.alphabet.forEach(letter => {
            letter.phonology.forEach(dialect => {
                dialect.phonemes.forEach(phono => {
                    if (phono.ipa === ipa) {
                        letters.push([letter, langObj.script]);
                    }
                })
            })
        })
    }

    return letters;
    
}
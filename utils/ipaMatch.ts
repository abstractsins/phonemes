// ipaMatch.ts
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
    console.log(raw);
    console.log(tokenizeIpa(raw).map(sym => lookupIpaInfo(sym) ?? { symbol: sym }));
    return tokenizeIpa(raw).map(sym => lookupIpaInfo(sym) ?? { symbol: sym });
}

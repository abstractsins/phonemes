// utils/Forvo.ts
import type {
    Dialect,
    ForvoItem,
    ForvoResponse
} from "@/app/types/types";

/** Map a dialect to a preferred country filter (optional). */
export function dialectToCountry(dialect: Dialect): string | undefined {
    const map: Partial<Record<string, string>> = {
        "en-GA": "United States",
    };
    return map[dialect.id];
}

/** Keep original array untouched. */
export function filterByCountry(items: ForvoItem[], country?: string): ForvoItem[] {
    if (!country) return items;
    return items.filter(i => i.country === country);
}

/** Highest positive votes first. */
export function sortByRatingDesc(a: ForvoItem, b: ForvoItem): number {
    return b.num_positive_votes - a.num_positive_votes;
}

/** Best single item for a dialect, or undefined if none. */
export function pickForvoItem(items: ForvoItem[], dialect: Dialect): ForvoItem | undefined {
    const country = dialectToCountry(dialect);
    const pool = filterByCountry(items, country);
    return [...pool].sort(sortByRatingDesc)[0];
}

/** Normalize api response → best audio URL string (https) or null. */
export function bestAudioUrl(items: ForvoItem[], dialect: Dialect): string | null {
    const item = pickForvoItem(items, dialect);
    const raw = item?.pathogg || item?.pathmp3 || "";
    if (!raw) return null;
    return raw.startsWith("http") ? raw : `https:${raw}`;
}

/** Call your Next API route. Keep keys server-side. */
export async function fetchForvo(
    word: string,
    language: string,
    opts?: { signal?: AbortSignal }
): Promise<ForvoResponse> {
    const url =
        `/api/forvo?word=${encodeURIComponent(word)}&language=${encodeURIComponent(language)}`;
    const res = await fetch(url, { signal: opts?.signal });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Forvo request failed: ${res.status} ${res.statusText} – ${text}`);
    }
    return res.json() as Promise<ForvoResponse>;
}

/** Convenience: fetch and return just the best audio URL (or null). */
export async function getBestForvoAudioUrl(
    word: string,
    language: string,
    dialect: Dialect,
    opts?: { signal?: AbortSignal }
): Promise<string | null> {
    const data = await fetchForvo(word, language, opts);
    return bestAudioUrl(data.items, dialect);
}

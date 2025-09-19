import { NextRequest, NextResponse } from "next/server";

const lookupLangAbbr = (language: string): string => {
    const langObj: Record<string, string> = {
        english: "en",
    };
    return langObj[language.toLowerCase()] || "";
};

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const word = searchParams.get("word");
        const language = searchParams.get("language");
        const lang = lookupLangAbbr(language || "");

        if (!word || !lang) {
            return NextResponse.json(
                { error: "Missing or invalid parameters" },
                { status: 400 }
            );
        }

        const API_KEY = process.env.FORVO_KEY || "fake-key";
        const apiUrl = "https://apifree.forvo.com";
        const url = `${apiUrl}/key/${API_KEY}/format/json/action/word-pronunciations/word/${word}/language/${lang}`;

        const res = await fetch(url);

        if (!res.ok) {
            return NextResponse.json(
                { error: `Forvo error ${res.status}`, details: await res.text() },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Unknown error";
        return NextResponse.json(
            { error: "Unexpected server error", details: msg },
            { status: 500 }
        );
    }
}

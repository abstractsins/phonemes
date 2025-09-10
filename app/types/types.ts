export type IPA = string;

export type ScriptName = "Arabic" | "Hebrew" | "Latin";

export type LanguageName =
    "English"
    | "Modern Standard Arabic"
    | "Modern Hebrew";

export type LetterTuple = [string, string];


export interface Language {
    name: LanguageName;
    nick: string;
    abbr: string;
    alphabet: LetterTuple[];
    script: string;
    leftToRight: boolean;
}

export interface Script {
    name: ScriptName;
    upperCase: boolean;
    firstThree: string;
    languages: Language[];
}
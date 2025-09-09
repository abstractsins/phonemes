export type IPA = string;

export type ScriptName = "Arabic" | "Hebrew" | "Latin";

export type LanguageName =
    "English"
    | "Modern Standard Arabic"
    | "Modern Hebrew";




export interface Language {
    name: LanguageName;
    nick: string;
    abbr: string;
    alphabet: string[];
}

export interface Script {
    name: ScriptName;
    upperCase: boolean;
    leftToRight: boolean;
    firstThree: string;
    languages: Language[];
}
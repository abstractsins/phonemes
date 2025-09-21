import { ModernHebrew } from "./languages/ModernHebrew";
import { English } from "./languages/English";
import { Language } from "../types/types";

type LanguageCollection = Record<string, Language>;

export const LANGUAGES: LanguageCollection = {
    'English': English,
    'Modern Hebrew': ModernHebrew
}

export const LanguageKeys = Object.keys(LANGUAGES);
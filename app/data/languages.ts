import { ModernHebrew } from './languages/ModernHebrew';
import { English } from './languages/English';
import { ModernArabic } from './languages/ModernStandardArabic';

import { Language } from '../types/types';

type LanguageCollection = Record<string, Language>;

export const LANGUAGES: LanguageCollection = {
    'English': English,
    'Modern Arabic': ModernArabic,
    'Modern Hebrew': ModernHebrew
}

export const LanguageKeys = Object.keys(LANGUAGES);
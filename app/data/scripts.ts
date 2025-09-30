import { ScriptMeta, Language, LanguageName } from '../types/types'

import { LANGUAGES } from './languages'


export const LatinScript: ScriptMeta = {
    name: 'Latin',
    label: 'Latin',
    dir: 'ltr',
    upperCase: true,
    languages: { 'English': LANGUAGES['English'] },
    defaultLanguage: 'English',
    firstThree: 'abc'
};

export const HebrewScript: ScriptMeta = {
    name: 'Hebrew',
    label: 'Hebrew',
    dir: 'rtl',
    upperCase: false,
    languages: { 'Modern Hebrew': LANGUAGES['Modern Hebrew'] },
    defaultLanguage: 'Modern Hebrew',
    firstThree: 'אבג'
};

export const ArabicScript: ScriptMeta = {
    name: 'Arabic',
    label: 'Arabic',
    dir: 'rtl',
    upperCase: false,
    languages: { 'Modern Arabic': LANGUAGES['Modern Arabic'] },
    defaultLanguage: 'Modern Arabic',
    firstThree: 'ابت'
};

export const SCRIPTS = {
    'Arabic': ArabicScript,
    'Hebrew': HebrewScript,
    'Latin': LatinScript
};

export const ScriptKeys = Object.keys(SCRIPTS);
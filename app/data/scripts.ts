import { ScriptMeta, Language, LanguageName } from '../types/types'

import { LANGUAGES } from './languages'


export const LatinScript: ScriptMeta<Partial<Record<LanguageName, Language>>> = {
    name: 'Latin',
    label: 'Latin',
    dir: 'ltr',
    upperCase: true,
    languages: { 'English': LANGUAGES['English'] },
    defaultLanguage: 'English',
    firstThree: 'abc'
};

export const HebrewScript: ScriptMeta<Partial<Record<LanguageName, Language>>> = {
    name: 'Hebrew',
    label: 'Hebrew',
    dir: 'rtl',
    upperCase: false,
    languages: { 'Modern Hebrew': LANGUAGES['Modern Hebrew'] },
    defaultLanguage:'Modern Hebrew',
    firstThree: 'אבג'
};

export const SCRIPTS = {
    'Latin': LatinScript,
    'Hebrew': HebrewScript
};

export const ScriptKeys = Object.keys(SCRIPTS);
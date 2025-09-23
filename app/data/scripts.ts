<<<<<<< HEAD
import { ScriptMeta } from '../types/types'
=======
import { ScriptMeta, Language, LanguageName } from '../types/types'
>>>>>>> 48c418ea53521f84376e8637586d20f7f59aeb36

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

<<<<<<< HEAD
export const HebrewScript: ScriptMeta = {
=======
export const HebrewScript: ScriptMeta<Partial<Record<LanguageName, Language>>> = {
>>>>>>> 48c418ea53521f84376e8637586d20f7f59aeb36
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
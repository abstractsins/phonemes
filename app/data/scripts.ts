import { ScriptMeta } from '../types/types'

import { LANGUAGES } from './languages'


export const LatinScript: ScriptMeta = {
    name: 'Latin',
    label: 'Latin',
    dir: 'ltr',
    upperCase: true,
    languages: { 'English': LANGUAGES['English'] },
    firstThree: 'abc'
}

export const HebrewScript: ScriptMeta = {
    name: 'Hebrew',
    label: 'Hebrew',
    dir: 'rtl',
    upperCase: false,
    languages: { 'Modern Hebrew': LANGUAGES['Modern Hebrew'] },
    firstThree: 'אבג'
}

export const SCRIPTS = {
    'Latin': LatinScript,
    'Hebrew': HebrewScript
};

console.log(SCRIPTS);
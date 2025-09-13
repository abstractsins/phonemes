import { ScriptMeta } from '../types/types'

import { English, ModernHebrew } from './languages'


export const LatinScript: ScriptMeta = {
    name: 'Latin',
    label: 'Latin',
    dir: 'ltr',
    upperCase: true,
    languages: { 'English': English },
    firstThree: 'abc'
}

export const HebrewScript: ScriptMeta = {
    name: 'Hebrew',
    label: 'Hebrew',
    dir: 'rtl',
    upperCase: false,
    languages: { 'Modern Hebrew': ModernHebrew },
    firstThree: 'אבג'
}

export const SCRIPTS = {
    'Latin': LatinScript,
    'Hebrew': HebrewScript
};

console.log(SCRIPTS);
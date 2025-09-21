import { makeScriptMeta } from '../types/types'

import { LANGUAGES } from './languages'


export const LatinScript = makeScriptMeta({
    name: 'Latin',
    label: 'Latin',
    dir: 'ltr',
    upperCase: true,
    languages: { 'English': LANGUAGES['English'] },
    firstThree: 'abc'
});

export const HebrewScript = makeScriptMeta({
    name: 'Hebrew',
    label: 'Hebrew',
    dir: 'rtl',
    upperCase: false,
    languages: { 'Modern Hebrew': LANGUAGES['Modern Hebrew'] },
    firstThree: 'אבג'
});

export const SCRIPTS = {
    'Latin': LatinScript,
    'Hebrew': HebrewScript
};

export const ScriptKeys = Object.keys(SCRIPTS);
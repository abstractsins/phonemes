import { ScriptMeta } from "../types/types"

import { English, ModernHebrew } from "./languages"


export const Latin: ScriptMeta = {
    name: "Latin",
    upperCase: true,
    languages: [English],
    firstThree: 'abc'
}

export const Hebrew: ScriptMeta = {
    name: "Hebrew",
    upperCase: false,
    languages: [ModernHebrew],
    firstThree: 'אבג'
}

export const scripts = [Latin, Hebrew];
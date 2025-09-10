import { Script } from "../types/types"

import { English, ModernHebrew } from "./languages"


export const Latin: Script = {
    name: "Latin",
    upperCase: true,
    languages: [English],
    firstThree: 'abc'
}

export const Hebrew: Script = {
    name: "Hebrew",
    upperCase: false,
    languages: [ModernHebrew],
    firstThree: 'אבג'
}

export const scripts = [Latin, Hebrew];
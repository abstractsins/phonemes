import {
    type Dir,
    type ScriptName,
    type LanguageName,
    type Letter,
    isGlyphs
} from "@types";

import { LANGUAGES } from "@data/languages";
import { SCRIPTS } from "@data/scripts";

import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

export const LANGUAGE_TO_SCRIPT: Partial<Record<LanguageName, ScriptName>> = {
    "English": "Latin",
    "Modern Hebrew": "Hebrew",
};

//* ============================================================
//* ********** Context state
//* ============================================================

export interface SoundMapState {
    selectedLanguage: LanguageName;
    selectedScript: ScriptName; // derived from language by default, but user‑overridable
    selectedLetter: Letter | null; // null = none
    direction: Dir; // defaults from script, but user‑overridable
    selectedLanguageAbbr: string;
}

export type SoundMapAction =
    | { type: "SET_LANGUAGE"; language: LanguageName }
    | { type: "SET_SCRIPT"; script: ScriptName }
    | { type: "SET_LETTER"; letter: Letter | null }
    | { type: "SET_DIRECTION"; direction: Dir }
    | { type: "CLEAR_SELECTION" };


function deriveScriptFromLanguage(lang: LanguageName, fallback: ScriptName = "Latin"): ScriptName {
    return LANGUAGE_TO_SCRIPT[lang] ?? fallback;
}

function deriveDirFromScript(script: ScriptName): Dir {
    return SCRIPTS[script]?.dir ?? "ltr";
}

function deriveAbbrFromLanguage(lang: LanguageName, fallback: string = "EN"): string {
    return LANGUAGES[lang]?.abbr ?? fallback;
}


export function createInitialState(partial?: Partial<SoundMapState>): SoundMapState {
    const language = partial?.selectedLanguage ?? ("English" as LanguageName);
    const script = partial?.selectedScript ?? deriveScriptFromLanguage(language, "Latin");
    const abbr = partial?.selectedLanguageAbbr ?? deriveAbbrFromLanguage(language);
    const direction = partial?.direction ?? deriveDirFromScript(script);

    return {
        selectedLanguage: language,
        selectedScript: script,
        selectedLetter: partial?.selectedLetter ?? null,
        selectedLanguageAbbr: abbr,
        direction
    };
}



function reducer(state: SoundMapState, action: SoundMapAction): SoundMapState {
    switch (action.type) {
        case "SET_LANGUAGE": {
            const nextScript = deriveScriptFromLanguage(action.language, state.selectedScript);
            const nextDir = deriveDirFromScript(nextScript);
            const nextAbbr = deriveAbbrFromLanguage(action.language);

            return {
                ...state,
                selectedLanguage: action.language,
                selectedLanguageAbbr: nextAbbr,
                selectedScript: nextScript,
                direction: nextDir,
                selectedLetter: null,
            };
        }
        case "SET_SCRIPT": {
            const dir = deriveDirFromScript(action.script);
            return {
                ...state,
                selectedScript: action.script,
                direction: dir
            };
        }
        case "SET_LETTER":
            return {
                ...state,
                selectedLetter: action.letter
            };
        case "SET_DIRECTION":
            return {
                ...state,
                direction: action.direction
            };
        case "CLEAR_SELECTION":
            return {
                ...state,
                selectedLetter: null
            };
        default:
            return state;
    }
}

// * ————————————————————————————————————————————————————————————
// * Context & Provider
// * ————————————————————————————————————————————————————————————
interface CtxValue extends SoundMapState {
    // dispatchers
    setLanguage: (language: LanguageName) => void;
    setScript: (script: ScriptName) => void;
    setLetter: (letter: Letter | null) => void;
    setDirection: (dir: Dir) => void;
    clearSelection: () => void;
}


const SoundMapContext = createContext<CtxValue | null>(null);


export interface SoundMapProviderProps {
    children: React.ReactNode;
    initial?: Partial<SoundMapState>;
    persist?: boolean; // persist in localStorage
    storageKey?: string; // default: "soundmap:ctx"
}


export function SoundMapProvider({ children, initial, persist = true, storageKey = "soundmap:ctx" }: SoundMapProviderProps) {
    // Load from localStorage (if enabled) only once on mount
    const hydratedInitial = useMemo(() => {
        if (typeof window === "undefined") return createInitialState(initial);
        if (!persist) return createInitialState(initial);
        try {
            const raw = window.localStorage.getItem(storageKey);
            if (raw) {
                const parsed = JSON.parse(raw) as Partial<SoundMapState>;
                return createInitialState({ ...initial, ...parsed });
            }
        } catch (err) {
            console.log(err);
        }
        return createInitialState(initial);
    }, [initial, persist, storageKey]);

    const [state, dispatch] = useReducer(reducer, hydratedInitial);

    // Persist on change
    useEffect(() => {
        if (!persist || typeof window === "undefined") return;
        try {
            window.localStorage.setItem(storageKey, JSON.stringify(state));
        } catch (err) {
            console.log(err)
        }
    }, [state, persist, storageKey]);

    const value: CtxValue = useMemo(
        () => ({
            ...state,
            setLanguage: (language) => dispatch({ type: "SET_LANGUAGE", language }),
            setScript: (script) => dispatch({ type: "SET_SCRIPT", script }),
            setLetter: (letter) => dispatch({ type: "SET_LETTER", letter }),
            setDirection: (direction) => dispatch({ type: "SET_DIRECTION", direction }),
            clearSelection: () => dispatch({ type: "CLEAR_SELECTION" }),
        }),
        [state]
    );

    return (
        <SoundMapContext.Provider value={value}>
            {children}
        </SoundMapContext.Provider>
    );
}


export function useSoundMap(): CtxValue {
    const ctx = useContext(SoundMapContext);
    if (!ctx) throw new Error("useSoundMap must be used within <SoundMapProvider>");
    return ctx;
}

// * ————————————————————————————————————————————————————————————
// * Helper Functions
// * ————————————————————————————————————————————————————————————

export function getGlyphs(letter: Letter | null): string {

    if (letter) {
        const script = letter.glyphs.script;

        if (script === 'Latin'
            && letter
            && isGlyphs(letter.glyphs, 'Latin')
        ) {
            return `${letter.glyphs.forms.upper} ${letter.glyphs.forms.lower}`;
        } else if (script === 'Hebrew'
            && letter
            && isGlyphs(letter.glyphs, 'Hebrew')
        ) {
            return `${letter.glyphs.forms.standard} ${letter.glyphs.forms.final || ''}`;
        }
    } 
    
    return '';
}

'use client';

import styles from "./Module.module.css";

import { useState, useRef } from "react";

import { Language, ScriptMeta } from "@/app/types/types";
import { useSoundMap } from "@/app/contexts/SoundMapContext";

interface Props {
    data: ScriptMeta<Record<string, Language>>;
}

export default function LanguageSelectionModule({ data }: Props) {

    const { setLanguage } = useSoundMap();

    const [isExpanded, setExpanded] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const hoverInHandler = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setExpanded(true);
        timeoutRef.current = setTimeout(() => setShowLanguages(true), 250);
    };

    const hoverOutHandler = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setExpanded(false);
        setShowLanguages(false);
    };


    return (
        <div
            className={`${styles.body} ${isExpanded && styles.expanded}`}
            onMouseEnter={hoverInHandler}
            onMouseLeave={hoverOutHandler}
        >
            <h2>{data.name}</h2>
            <h3>{data.upperCase ? data.firstThree.toUpperCase() : data.firstThree}</h3>

            {showLanguages &&
                <ul>
                    {Object.values(data.languages).map(lang =>
                        lang && (
                            <li
                                key={lang.nick}
                                className={`${styles.language}`}
                                onClick={() => setLanguage(lang.name)}
                            >
                                {lang.name}
                            </li>)
                    )}
                </ul>
            }

        </div>
    );
}
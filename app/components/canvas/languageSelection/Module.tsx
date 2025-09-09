'use client';

import styles from "./Module.module.css";

import { useState, useRef } from "react";

import { Language, Script } from "@/app/types/types";

interface Props {
    data: Script;
    onSelect: (language: Language) => void;
}

export default function LanguageSelectionModule({ data, onSelect }: Props) {

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

    const languageClickHandler = () => {

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
                    {data.languages.map(lang =>
                        <li
                            key={lang.abbr}
                            className={`${styles.language}`}
                            onClick={() => onSelect(lang)}
                        >
                            {lang.name}
                        </li>
                    )}
                </ul>
            }

        </div>
    );
}
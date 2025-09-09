'use client';

import { Language } from '../types/types';
import styles from './Canvas.module.css';
import LanguageSelection from './canvas/LanguageSelection';
import { useState } from 'react';

export default function Canvas() {

    const [selectedLanguage, setSelectedLanguage] = useState<Language | undefined>();

    const selectionHandler = (language: Language) => {
        console.log('Selected Language: ' + language);
        setSelectedLanguage(language);
    };

    return (
        <div className={styles.body}>
            <LanguageSelection onSelect={selectionHandler} />
            <h1>{selectedLanguage?.name}</h1>
        </div>
    );
}
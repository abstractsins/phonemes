'use client';

import { Language } from '../types/types';
import styles from './Canvas.module.css';
import LanguageSelection from './canvas/LanguageSelection';
import { useState } from 'react';
import LetterSelection from './canvas/LetterSelection';

export default function Canvas() {

    const [selectedLanguage, setSelectedLanguage] = useState<Language | undefined>();

    const selectionHandler = (language: Language) => {
        console.log('Selected Language: ' + language);
        setSelectedLanguage(language);
    };

    return (
        <div className={styles.body}>
            <LanguageSelection onSelect={selectionHandler} />
            {selectedLanguage &&
                <LetterSelection leftToRight={selectedLanguage.leftToRight} language={selectedLanguage} />
            }
        </div>
    );
}
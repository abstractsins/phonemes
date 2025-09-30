'use client';

import styles from './Canvas.module.css';

import LanguageSelection from './canvas/LanguageSelection';
import LetterExhibit from './canvas/letterExhibit/LetterExhibit';
import LetterSelection from './canvas/LetterSelection';

export default function Canvas() {

    return (
        <div className={styles.body}>
            <LanguageSelection />
            <div className={styles.canvasExhibitSpace}>
                <LetterSelection />
                <LetterExhibit />
            </div>
        </div>
    );
}
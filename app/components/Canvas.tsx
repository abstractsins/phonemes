'use client';

import styles from './Canvas.module.css';

import { useSoundMap } from '../contexts/SoundMapContext';
import LanguageSelection from './canvas/LanguageSelection';
import LetterExhibit from './canvas/letterExhibit/LetterExhibit';
import LetterSelection from './canvas/LetterSelection';

export default function Canvas() {

    const {
        selectedLetter
    } = useSoundMap();

    return (
        <div className={styles.body}>
            <LanguageSelection />
            <div className={styles.canvasExhibitSpace}>
                <LetterSelection />
                <LetterExhibit letter={selectedLetter}/>
            </div>
        </div>
    );
}
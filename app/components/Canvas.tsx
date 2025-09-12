'use client';

import styles from './Canvas.module.css';
import LanguageSelection from './canvas/LanguageSelection';
import LetterSelection from './canvas/LetterSelection';

import { SoundMapProvider } from '../contexts/SoundMapContext';


export default function Canvas() {

    return (
        <SoundMapProvider>
            <div className={styles.body}>
                <LanguageSelection />
                <LetterSelection />
            </div>
        </SoundMapProvider>
    );
}
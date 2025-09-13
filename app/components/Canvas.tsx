'use client';

import styles from './Canvas.module.css';
import LanguageSelection from './canvas/LanguageSelection';
import LetterSelection from './canvas/LetterSelection';

import { createInitialState, SoundMapProvider } from '../contexts/SoundMapContext';


export default function Canvas() {

    return (
        <SoundMapProvider initial={createInitialState()} persist={false}>
            <div className={styles.body}>
                <LanguageSelection />
                <LetterSelection />
            </div>
        </SoundMapProvider>
    );
}
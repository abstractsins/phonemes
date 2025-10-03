'use client';

import styles from './Canvas.module.css';

import LanguageSelection from './canvas/LanguageSelection';
import LetterExhibit from './canvas/letterExhibit/LetterExhibit';
import LetterSelection from './canvas/LetterSelection';
import ScreenGuard from './ui/ScreenGuard';

interface Props {
    headerExpanded: boolean;
}

export default function Canvas({ headerExpanded }: Props) {

    return (
        <div className={`${styles.body} ${headerExpanded ? styles.blur : ''}`}>
            {headerExpanded && <ScreenGuard />}
            <LanguageSelection />
            <div className={styles.canvasExhibitSpace}>
                <LetterSelection />
                <LetterExhibit />
            </div>
        </div>
    );
}
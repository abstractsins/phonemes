import styles from '@comp/canvas/letterExhibit/LetterExhibit.module.css';

import { useSoundMap } from '@/app/contexts/SoundMapContext';

import { isGlyphs } from '@/app/types/types';
import LetterHeroCaption from './LetterHeroCaption';


export default function LetterHeroWrapper() {

    const {
        selectedScript,
        selectedLetter,
        selectedLanguageAbbr
    } = useSoundMap();

    return (
        <div className={styles.letterHeroColumn}>

            <div className={`${styles.letterHero} ${styles[selectedLanguageAbbr]}`}>
                {selectedScript === 'Latin' &&
                    selectedLetter &&
                    isGlyphs(selectedLetter.glyphs, 'Latin') &&
                    selectedLetter.glyphs.forms.upper}

                {selectedScript === 'Hebrew' &&
                    selectedLetter &&
                    isGlyphs(selectedLetter.glyphs, 'Hebrew') &&
                    selectedLetter.glyphs.forms.standard}

                {selectedScript === 'Arabic' &&
                    selectedLetter &&
                    isGlyphs(selectedLetter.glyphs, 'Arabic') &&
                    selectedLetter.glyphs.forms.isolated}
            </div>

            <LetterHeroCaption />

        </div>
    );
}
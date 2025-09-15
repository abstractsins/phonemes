import styles from './LetterExhibit.module.css';

import CloseButton from '@comp/ui/CloseButton';

import { useSoundMap } from '@/app/contexts/SoundMapContext';

import { Letter, isGlyphs } from '@/app/types/types';
import TypographyWrapper from './typography/TypographyWrapper';
import LetterHeroCaption from './LetterHeroCaption';

interface Props {
    letter: Letter | null;
}

export default function LetterExhibit({ letter }: Props) {

    const {
        setLetter,
        selectedScript,
        selectedLetter,
        selectedLanguageAbbr
    } = useSoundMap();

    return (
        <div className={`${styles.body} ${!letter && styles.hide}`}>
            <CloseButton onClick={() => setLetter(null)} />
            {selectedLetter && <>
                <div className={styles.letterCanvas}>
                    <div className={styles.letterHeroColumn}>
                        <div className={`${styles.letterHero} ${styles[selectedLanguageAbbr]}`}>
                            {selectedScript === 'Latin' &&
                                letter &&
                                isGlyphs(letter.glyphs, 'Latin') &&
                                letter.glyphs.forms.upper}

                            {selectedScript === 'Hebrew' &&
                                letter &&
                                isGlyphs(letter.glyphs, 'Hebrew') &&
                                letter.glyphs.forms.standard}
                        </div>
                        <LetterHeroCaption />
                    </div>
                    <TypographyWrapper />
                </div>
            </>}
        </div>
    );
}
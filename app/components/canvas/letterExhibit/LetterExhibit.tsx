import styles from './LetterExhibit.module.css';

import CloseButton from '@comp/ui/CloseButton';

import { useSoundMap } from '@/app/contexts/SoundMapContext';

import { Letter } from '@/app/types/types';
import TypographyWrapper from './typography/TypographyWrapper';
import LetterHeroWrapper from './letterHero/LetterHeroWrapper';
import DialectCard from './dialect/DialectCard';

interface Props {
    letter: Letter | null;
}

export default function LetterExhibit({ letter }: Props) {

    const {
        setLetter,
        selectedLetter,
    } = useSoundMap();

    return (
        <div className={`${styles.body} ${!letter && styles.hide}`}>
            <CloseButton onClick={() => setLetter(null)} />

            {selectedLetter && <>
                <div className={styles.letterCanvas}>

                    <LetterHeroWrapper />

                    <TypographyWrapper />

                    {selectedLetter.phonology.map(d =>
                        <DialectCard key={d.dialect.id} data={d} />
                    )}

                </div>
            </>}
        </div>
    );
}
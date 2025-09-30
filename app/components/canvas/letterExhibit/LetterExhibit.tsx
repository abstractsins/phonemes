import styles from './LetterExhibit.module.css';

import CloseButton from '@comp/ui/CloseButton';

import { useSoundMap } from '@/app/contexts/SoundMapContext';

import TypographyWrapper from './typography/TypographyWrapper';
import LetterHeroWrapper from './letterHero/LetterHeroWrapper';
import DialectCard from './dialect/DialectCard';


export default function LetterExhibit() {

    const {
        setLetter,
        selectedLetter,
        selectedScript,
        canvasVisible
    } = useSoundMap();

    return (
        <div className={`${styles.body} ${!canvasVisible ? styles.hide : ''} ${styles[selectedScript]}`}>

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
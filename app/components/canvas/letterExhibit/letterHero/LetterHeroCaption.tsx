import styles from './LetterHeroCaption.module.css';

import { useSoundMap } from '@/app/contexts/SoundMapContext';

export default function LetterHeroCaption() {

    const { selectedLetter } = useSoundMap();

    return (
        <div className={styles.wrapper}>

            <div className={styles.body}>
                <span className={styles.name}>{selectedLetter?.names[0].spellings.join('/')}</span>
            </div>
            <div className={styles.body}>
                <span className={styles.name}>/{selectedLetter?.names[0].phonetics.dictionary}/</span>
            </div>

        </div>

    );
}
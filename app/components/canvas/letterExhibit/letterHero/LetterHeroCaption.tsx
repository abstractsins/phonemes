import styles from './LetterHeroCaption.module.css';

import { useSoundMap } from '@/app/contexts/SoundMapContext';

export default function LetterHeroCaption() {

    const { selectedLetter } = useSoundMap();

    return (
        <div className={styles.wrapper}>

            <div className={styles.body}>
                <span>{selectedLetter?.names}</span>
            </div>
            <div className={styles.body}>
                <span>{selectedLetter?.order}</span>
            </div>

        </div>

    );
}
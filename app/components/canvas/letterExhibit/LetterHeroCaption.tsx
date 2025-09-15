import { useSoundMap } from '@/app/contexts/SoundMapContext';
import styles from './LetterHeroCaption.module.css';

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
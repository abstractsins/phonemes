import styles from './LetterSelection.module.css';
import LetterDisplay from './letterSelection/LetterDisplay';

import { useSoundMap } from '@/app/contexts/SoundMapContext';

export default function LetterSelection() {

    const {
        selectedLetter, 
        selectedScript
    } = useSoundMap();

    const { selectedLanguage, direction } = useSoundMap();

    return (
        <div className={`${styles.body} ${styles[selectedScript]} ${selectedLetter ? styles.hide : ''}`}>

            {/* HEADER */}
            {selectedLanguage &&
                <>
                    <div className={`${styles.header} ${styles[selectedScript]}`}>
                        <h1>{selectedLanguage}</h1>
                        <span className={styles.direction}>
                            {`Direction: ${direction === 'ltr' ? 'Left to Right ->' : '<- Right to Left'}`}
                        </span>
                    </div>

                    <div className={styles.main}>
                        {/* LETTERS */}
                        <LetterDisplay />
                    </div>
                </>
            }

        </div>
    );
}
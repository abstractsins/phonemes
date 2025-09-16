import styles from './LetterSelection.module.css';
import LetterDisplay from './letterSelection/LetterDisplay';

import { useSoundMap } from '@/app/contexts/SoundMapContext';

export default function LetterSelection() {

    const {
        selectedLetter
    } = useSoundMap();

    const { selectedLanguage, direction } = useSoundMap();

    return (
        <div className={`${styles.body} ${selectedLetter ? styles.hide : ''}`}>

            {/* HEADER */}
            {selectedLanguage &&
                <>
                    <div className={styles.header}>
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
            {/* {selectedLetter &&
                <div>
                    <pre>
                        {JSON.stringify(selectedLetter, null, 2)}
                    </pre>
                </div>
            } */}

        </div>
    );
}
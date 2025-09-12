import { Language } from '@/app/types/types';
import styles from './LetterSelection.module.css';
import LetterDisplay from './letterSelection/LetterDisplay';


import { useSoundMap } from '@/app/contexts/SoundMapContext';

export default function LetterSelection() {

    const { selectedLanguage } = useSoundMap();

    return (
        <div className={styles.body}>

            {/* HEADER */}
            {selectedLanguage && <>
                <div className={styles.header}>
                    <h1>{selectedLanguage}</h1>
                    <span className={styles.direction}>Direction: </span>
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
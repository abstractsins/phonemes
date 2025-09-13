import styles from './LetterDisplay.module.css';

import { Letter } from '@/app/types/types';
import LetterTile from './LetterTile';
import { motion } from "motion/react"
import { useEffect, useState } from 'react';
import { useSoundMap } from '@/app/contexts/SoundMapContext';
import { SCRIPTS } from '@/app/data/scripts';


export default function LetterDisplay() {

    const {
        selectedLanguage,
        selectedScript,
        direction,
        setLetter
    } = useSoundMap();


    const [hoverLetter, setHoverLetter] = useState<Letter | null>(null);


    useEffect(() => {
        if (hoverLetter) console.log('Hovering on ====> ' + hoverLetter.names);
    }, [hoverLetter]);

    return (
        <div className={`${styles.body} ${styles[direction]}`}>
            {SCRIPTS[selectedScript].languages[selectedLanguage]?.alphabet.map((letter, i) =>
                <motion.button
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.tileWrapper}
                    onHoverStart={() => setHoverLetter(letter)}
                    onHoverEnd={() => setHoverLetter(null)}
                    onClick={() => setLetter(letter)}
                >
                    <LetterTile key={i} letter={letter} />
                </motion.button>
            )}
        </div>
    );
}
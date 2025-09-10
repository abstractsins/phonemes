import { Language, LetterTuple } from '@/app/types/types';
import styles from './LetterDisplay.module.css';
import LetterTile from './LetterTile';
import { motion } from "motion/react"
import { useEffect, useState } from 'react';

interface Props {
    language: Language | undefined;
    leftToRight: boolean;
}

export default function LetterDisplay({ language, leftToRight }: Props) {

    const [hoverLetter, setHoverLetter] = useState<LetterTuple | null>(null);

    const selectionHandler = (letter: LetterTuple) => {
        console.log('letter selected ==> ' + letter);
    };

    useEffect(() => {
        if (hoverLetter) console.log('Hovering on ====> ' + hoverLetter);
    }, [hoverLetter])

    return (
        <div className={`${styles.body} ${leftToRight ? styles.leftToRight : styles.rightToLeft}`}>
            {language?.alphabet.map((letter, i) =>
                <motion.button
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.tileWrapper}
                    onHoverStart={() => setHoverLetter(letter)}
                    onHoverEnd={() => setHoverLetter(null)}
                    onClick={() => selectionHandler(letter)}
                >
                    <LetterTile key={i} letter={letter} />
                </motion.button>
            )}
        </div>
    );
}
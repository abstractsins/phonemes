import { Language, Letter } from '@/app/types/types';
import styles from './LetterDisplay.module.css';
import LetterTile from './LetterTile';
import { motion } from "motion/react"
import { useEffect, useState } from 'react';

interface Props {
    language: Language | undefined;
    leftToRight: boolean;
    setSelectedLetter
}

export default function LetterDisplay({ language, leftToRight }: Props) {

    const [hoverLetter, setHoverLetter] = useState<Letter | null>(null);
    const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

    const selectionHandler = (letter: Letter) => {
        console.log('letter selected ==> ' + letter.names);
        setSelectedLetter(letter);
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
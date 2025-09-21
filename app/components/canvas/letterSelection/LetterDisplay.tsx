import styles from './LetterDisplay.module.css';

import { useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from "motion/react";

import { Letter } from '@/app/types/types';
import { SCRIPTS } from '@/app/data/scripts';

import LetterTile from './LetterTile';

import { useSoundMap } from '@/app/contexts/SoundMapContext';

export default function LetterDisplay() {

    const {
        selectedLanguage,
        setLetter,
        selectedScript,
        direction
    } = useSoundMap();

    const letters: Letter[] = SCRIPTS[selectedScript].languages[selectedLanguage]?.alphabet ?? [];

    const [hoverLetter, setHoverLetter] = useState<Letter | null>(null);

    return (
        <MotionConfig reducedMotion="user">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={`${selectedScript}:${selectedLanguage}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.02 } }}
                    exit={{ opacity: 0, y: -12 }}
                    className={`${styles.body} ${styles[direction]}`}
                    layout // smooth grid size changes (26 → 22, etc.)
                >
                    {letters.map((letter, i) => (
                        <motion.button
                            key={letter.names?.[0] ?? i}
                            className={styles.tileWrapper}
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.97 }}
                            variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } }}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            layout
                            onHoverStart={() => setHoverLetter(letter)}
                            onHoverEnd={() => setHoverLetter(null)}
                            onClick={() => setLetter(letter)}
                        >
                            <LetterTile letter={letter} />
                        </motion.button>
                    ))}
                </motion.div>
            </AnimatePresence>
        </MotionConfig>
    );
}
import styles from './IpaCard.module.css';

import { HiSpeakerWave } from "react-icons/hi2";
import { Dialect, IpaToLetterMatch, Letter, Phoneme, ScriptName } from '@/app/types/types';

import { enrichIpa } from "@utils/ipaMatch";

import { getGlyphs, useSoundMap } from '@/app/contexts/SoundMapContext';
import { useForvoAudio } from '@/hooks/useForvoAudio';

import { matchLettersFromIPA } from '@utils/ipaMatch';
import { motion } from 'motion/react';
import InputSpinner from '@/app/components/ui/InputSpinner';
import LetterTile from '../../letterSelection/LetterTile';
import { useEffect, useState } from 'react';


interface Props {
    data: Phoneme;
    dialect: Dialect;
}

export default function IpaCard({ data, dialect }: Props) {

    const { play, status, isBusy } = useForvoAudio(dialect);

    const {
        selectedLanguage,
        setLetter,
        selectedScript,
        selectedLanguageAbbr,
        setCanvas
    } = useSoundMap();

    const [matchingLettersArr, setMatchingLetters] = useState<IpaToLetterMatch[] | undefined>();

    const {
        ipa,
        envNote,
        example
    } = data;

    const parts = enrichIpa(ipa);

    const handleCrossLetterSet = (letterTuple: IpaToLetterMatch) => {
        const letter: Letter = letterTuple[0];
        const script: ScriptName = letterTuple[1];
        setCanvas(false)
        setTimeout(() => setLetter(letter, script), 150);
    }

    useEffect(() => {
        console.log(selectedLanguage);
        const matchingLetters = matchLettersFromIPA(ipa, selectedLanguage);
        setMatchingLetters(matchingLetters);
    }, [selectedLanguage, ipa]);


    return (
        <div className={styles.body}>

            <div className={styles.ipaWrapper}>
                <span className={styles.ipaText}>/{ipa}/</span>
            </div>

            {parts.map((p, i) => (
                <div key={i} className={styles.ipaCaption}>
                    <span className={styles.ipaName}>{("name" in p && p.name) || ""}</span>
                    {envNote && <span className={styles.envNote}>-{envNote}-</span>}
                </div>
            ))}

            <div className={styles.inputWrapper}>

                {example &&
                    <div className={`${styles.exampleWrapper} ${isBusy ? styles.disabled : ''}`} onClick={() => play(example?.word, selectedLanguage)}>
                        <span className={`${styles.exampleText} ${styles[selectedLanguageAbbr]}`}>{example?.word} <HiSpeakerWave className={styles.audioIcon} /></span>
                    </div>
                }

                {status === 'loading' && <InputSpinner />}

            </div>

            <div className={styles.tilesWrapper}>

                {matchingLettersArr?.map((letter, i) =>
                    <motion.button key={i}
                        className={styles.tileWrapper}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.97 }}
                        variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } }}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        layout
                        onClick={() => handleCrossLetterSet(letter)}
                    // onHoverStart={() => setHoverLetter(letter)}
                    // onHoverEnd={() => setHoverLetter(null)}
                    >
                        <LetterTile key={i} letter={letter[0]} title={letter[1]} footer={letter[1] === 'Latin' ? 'English' : ''} size='small' />
                    </motion.button>
                )}

            </div>

        </div>
    );
}
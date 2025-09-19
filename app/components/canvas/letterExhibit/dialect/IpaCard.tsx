import styles from './IpaCard.module.css';

import { HiSpeakerWave } from "react-icons/hi2";
import { Dialect, Phoneme } from '@/app/types/types';

import { enrichIpa } from "@utils/ipaMatch";

import { useSoundMap } from '@/app/contexts/SoundMapContext';
import { useForvoAudio } from '@/hooks/useForvoAudio';
import InputSpinner from '@/app/components/ui/InputSpinner';


interface Props {
    data: Phoneme;
    dialect: Dialect;
}

export default function IpaCard({ data, dialect }: Props) {

    const { play, status, isBusy } = useForvoAudio(dialect);
    const { selectedLanguage } = useSoundMap();

    const {
        ipa,
        envNote,
        example
    } = data;

    const parts = enrichIpa(ipa);


    return (
        <div className={styles.body}>

            <div className={styles.ipaWrapper}>
                <span className={styles.ipaText}>/{ipa}/</span>
            </div>

            {parts.map((p, i) => (
                <div key={i} className="">
                    <span className={styles.ipaName}>{("name" in p && p.name) || ""}</span>
                </div>
            ))}

            <div className={styles.inputWrapper}>
                {example &&
                    <div className={`${styles.exampleWrapper} ${isBusy ? styles.disabled : ''}`} onClick={() => play(example?.word, selectedLanguage)}>
                        <span className={styles.exampleText}>{example?.word} <HiSpeakerWave className={styles.audioIcon} /></span>
                    </div>
                }
                {status === 'loading' &&
                    <InputSpinner />
                }
            </div>
            <span>{envNote}</span>

        </div>
    );
}
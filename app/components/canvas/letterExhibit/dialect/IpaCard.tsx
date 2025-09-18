import styles from './IpaCard.module.css';

import { Phoneme } from '@/app/types/types';

import { enrichIpa } from "@utils/ipaMatch";

interface Props {
    data: Phoneme
}

export default function IpaCard({ data }: Props) {

    const {
        ipa,
        envNote,
        example
    } = data;

    const parts = enrichIpa(ipa);

    console.log(parts);

    return (
        <div className={styles.body}>

            <div className={styles.ipaWrapper}>
                <span className={styles.ipaText}>/{ipa}/</span>
            </div>

            {parts.map((p, i) => (
                <div key={i} className="ipa-chip">
                    <span className="name">{("name" in p && p.name) || ""}</span>
                </div>
            ))}

            <span className={styles.example}>ex: {example?.word}</span>

        </div>
    );
}
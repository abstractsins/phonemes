import styles from './Dialect.module.css';

import { useSoundMap } from '@/app/contexts/SoundMapContext';
import { DialectPhonology } from '@/app/types/types';
import IpaCard from './IpaCard';

interface Props {
    data: DialectPhonology
}

export default function DialectCard({ data }: Props) {

    return (
        <div className={styles.wrapper}>

            <div className={styles.header}>
                <span className={styles.headerTitle}>{data.dialect.name}</span>
            </div>

            <div className={styles.body}>
                {data.phonemes.map((p, i) =>
                    <IpaCard key={i} data={p} />
                )}
            </div>

        </div>
    );
}
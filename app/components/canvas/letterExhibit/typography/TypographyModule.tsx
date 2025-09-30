import styles from './Typography.module.css';

import { useSoundMap, getGlyphs } from '@/app/contexts/SoundMapContext';

interface Props {
    title: string;
}

export default function TypographyModule({ title }: Props) {

    const { selectedLetter, selectedLanguageAbbr } = useSoundMap();
    

    return (

        <div className={styles.moduleBody}>
            <div className={styles.moduleHeader}>
                {title}
            </div>

            <div className={`${styles.letterWrapper}`}>
                <span className={`${styles[title]} ${styles.letter} ${styles[selectedLanguageAbbr]}`}>
                    {getGlyphs(selectedLetter)}
                </span>
            </div>

        </div>
    );
}
import { Language } from '@/app/types/types';
import styles from './LetterSelection.module.css';
import LetterDisplay from './letterSelection/LetterDisplay';

interface Props {
    language: Language | undefined;
    leftToRight: boolean;
}

export default function LetterSelection({ language, leftToRight }: Props) {
    return (
        <div className={styles.body}>

            {/* HEADER */}
            {language && <>
                <div className={styles.header}>
                    <h1>{language?.name}</h1>
                    <span className={styles.direction}>Direction: {language.leftToRight ? 'Left to Right ->' : '<- Right to Left'}</span>
                </div>

                <div className={styles.main}>
                    {/* LETTERS */}
                    <LetterDisplay leftToRight={leftToRight} language={language} />
                </div>
            </>
            }

        </div>
    );
}
import { Letter } from '@/app/types/types';
import styles from './LetterTile.module.css';

interface Props {
    letter: Letter;
}

export default function LetterTile({ letter }: Props) {

    const script = letter.glyphs.script;

    return (
        <div className={styles.body}>
            <span className={`${styles.letter} ${styles[script]}`}>
                {
                    script === "Latin" &&
                    (`${letter.glyphs.forms.upper} ${letter.glyphs.forms.lower}`)
                }
                {
                    script === "Hebrew" &&
                    (`${letter.glyphs.forms.standard} ${letter.glyphs.forms.final || ''}`)
                }
            </span>
        </div>
    );
}
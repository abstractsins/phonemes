import { Letter } from '@/app/types/types';
import styles from './LetterTile.module.css';

interface Props {
    letter: Letter;
}

export default function LetterTile({ letter }: Props) {
    return (
        <div className={styles.body}>
            <span className={styles.letter}>
                {letter.glyphs.script === "Latin" &&
                    (`${letter.glyphs.forms.upper} ${letter.glyphs.forms.lower}`)
                }
                {
                    letter.glyphs.script === "Hebrew" &&
                    (`${letter.glyphs.forms.standard} ${letter.glyphs.forms.final || ''}`)
                }
            </span>
        </div>
    );
}
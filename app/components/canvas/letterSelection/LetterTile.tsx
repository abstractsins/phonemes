import { Letter } from '@/app/types/types';
import styles from './LetterTile.module.css';

interface Props {
    letter: Letter;
    title?: string;
    footer?: string;
    size?: string;
}

export default function LetterTile({ letter, title, footer, size = 'medium' }: Props) {

    const script = letter.glyphs.script;

    return (
        <div className={`${styles.body} ${styles[size]} ${title ? styles[title] : ''}`}>

            {title && <span className={styles.title}>{title}</span>}

            <span className={`${styles.letter} ${styles[script]} ${styles[size]}`}>
                {
                    script === "Latin" &&
                    (`${letter.glyphs.forms.upper} ${letter.glyphs.forms.lower}`)
                }
                {
                    script === "Hebrew" &&
                    (`${letter.glyphs.forms.standard} ${letter.glyphs.forms.final || ''}`)
                }
                {
                    script === "Arabic" &&
                    (`${letter.glyphs.forms.isolated}`)
                }
            </span>

            {footer && <span className={styles.footer}>{footer}</span>}

        </div>
    );
}
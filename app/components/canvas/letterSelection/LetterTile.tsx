import { LetterTuple } from '@/app/types/types';
import styles from './LetterTile.module.css';

interface Props {
    letter: LetterTuple;
}

export default function LetterTile({ letter }: Props) {
    return (
        <div className={styles.body}>
            <span className={styles.letter}>{letter.join(' ')}</span>
        </div>
    );
}
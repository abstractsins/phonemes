import { Letter } from '@/app/types/types';
import styles from './LetterExhibit.module.css';
import CloseButton from '../../CloseButton';
import { useSoundMap } from '@/app/contexts/SoundMapContext';

interface Props {
    letter: Letter | null;
}

export default function LetterExhibit({ letter }: Props) {

    const {
        setLetter
    } = useSoundMap();

    return (
        <div className={`${styles.body} ${!letter && styles.hide}`}>
            {letter?.names}
            <CloseButton onClick={() => setLetter(null)}/>
        </div>
    );
}
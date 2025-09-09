import styles from './LanguageSelection.module.css';

import { Script, Language } from '@/app/types/types';
import { scripts } from '@/app/data/scripts';
import LanguageSelectionModule from './languageSelection/Module';

interface Props {
    onSelect: (language: Language) => void;
}

export default function LanguageSelection({ onSelect }: Props) {
    return (
        <div className={styles.body}>
            {scripts.map(script =>
                <LanguageSelectionModule
                    key={script.name}
                    data={script}
                    onSelect={onSelect}
                />
            )}
        </div>
    );
}
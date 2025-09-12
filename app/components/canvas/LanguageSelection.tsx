import styles from './LanguageSelection.module.css';

import { ScriptMeta } from '@/app/types/types';
import { SCRIPTS } from '@/app/data/scripts';
import LanguageSelectionModule from './languageSelection/Module';

export default function LanguageSelection() {

    return (
        <div className={styles.body}>
            {Object.values(SCRIPTS).map(( script : ScriptMeta) =>
                <LanguageSelectionModule
                    key={script.name}
                    data={script}
                />
            )}
        </div>
    );
}
import styles from './Typography.module.css';
import TypographyModule from './TypographyModule';

export default function TypographyWrapper() {
    return (
        <div className={styles.mainWrapper}>
            <TypographyModule title='Serif'/>
            <TypographyModule title='Sans'/>
            <TypographyModule title='Cursive'/>
        </div>
    );
}
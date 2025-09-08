import styles from './About.module.css';

interface Props {
    show: boolean;
}

export default function About({ show }: Props) {
    return (
        <div className={`${styles.body} ${styles.invisible} ${show ? styles.visible : ''}`}>
            about
        </div>
    );
}
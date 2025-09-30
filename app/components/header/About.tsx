import styles from './About.module.css';

interface Props {
    show: boolean;
}

export default function About({ show }: Props) {
    return (
        <div className={`${styles.body} ${styles.invisible} ${show ? styles.visible : ''}`}>
            <p>
                Aleph Bets is an interactive tool for exploring how different alphabets connect through sound. Select a script (Arabic, Hebrew, or Latin), click a letter, and see its pronunciation, 
                IPA values, and cross-script matches. The project is designed as a fun way to learn alphabets side by side, discover similarities across languages, and hear how letters actually sound. 
                Future additions include Greek and Cyrillic.
            </p>

            <p>
                The site is built with Next.js (App Router) and React, with data modeled in TypeScript for type safety and maintainability. All letters, IPA mappings, and cross-alphabet relationships 
                are defined in structured JSON/TS objects, so the app stays lightweight and runs fully client-side without a backend. Styling uses modern CSS (flexbox, gradients, responsive design), 
                while audio hooks integrate with external pronunciation sources. This setup makes Aleph Bets both a playful learning tool and a showcase of clean, scalable front-end architecture.
            </p>
        </div>
    );
}
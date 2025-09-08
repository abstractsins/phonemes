import styles from './Feedback.module.css';

import ContactForm from "./ContactForm";
import FeedbackCopy from './FeedbackCopy';

interface Props {
    show: boolean;
}

export default function Feedback({ show }: Props) {

    return (
        <div className={`${styles.body} ${styles.invisible} ${show ? styles.visible : ''}`}>
            <FeedbackCopy />
            <ContactForm />
        </div>
    );
}
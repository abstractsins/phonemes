import styles from './FeedbackCopy.module.css';

export default function FeedbackCopy() {
    return (
        <div className={styles.body}>
            <ul>
                <li>Have a question?</li>
                <li>See something that needs correcting?</li>
                <li>Or maybe you just have a comment...</li>
            </ul>

            <span>This is an evolving project so feel free to reach out with any comments</span>
        </div>
    );
}
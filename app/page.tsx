'use client';

import About from "./components/header/About";
import Feedback from "./components/header/Feedback";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {


    const [isFeedbackFormShowing, setFeedbackFormShowing] = useState(false);
    const [isAboutShowing, setAboutShowing] = useState(false);
    const [isHeaderExpanded, setHeaderExpanded] = useState(false);


    const showFeedbackHandler = () => {
        setHeaderExpanded(prev => !prev);
        setTimeout(() => setFeedbackFormShowing(prev => !prev), 250)
    };

    const showAboutHandler = () => {
        setHeaderExpanded(prev => !prev);
        setAboutShowing(prev => !prev);
    };


    return (
        <header className={`${styles.header} ${isHeaderExpanded && styles.expand}`}>
            <div className={styles.headerTop}>

                <div className={styles.titleWrapper}>
                    <h1 className={styles.titleText}>Aleph Bets</h1>
                </div>

                <div className={styles.headerLinksWrapper}>
                    <div className={styles.headerLink} onClick={showAboutHandler}>
                        <span className={styles.headerLink}>About</span>
                    </div>

                    <div className={styles.headerLink} onClick={showFeedbackHandler}>
                        <span className={styles.headerLink}>Feedback</span>
                    </div>
                </div>

            </div>

            {isHeaderExpanded &&
                <div className={styles.expandedWrapper}>
                    <About show={isAboutShowing} />
                    <Feedback show={isFeedbackFormShowing} />
                </div>
            }

        </header>
    );
}
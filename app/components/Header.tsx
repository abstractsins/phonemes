'use client';

import About from "./header/About";
import Feedback from "./header/Feedback";
import styles from "./Header.module.css";
import { useState } from "react";


export default function Header() {


    const [isFeedbackFormShowing, setFeedbackFormShowing] = useState(false);
    const [isAboutShowing, setAboutShowing] = useState(false);
    const [isHeaderExpanded, setHeaderExpanded] = useState(false);


    const showFeedbackHandler = () => {
        if (isFeedbackFormShowing && isHeaderExpanded) {
            setFeedbackFormShowing(false);
            setHeaderExpanded(false);
        } else if (isAboutShowing && isHeaderExpanded) {
            setAboutShowing(false);
            setFeedbackFormShowing(true);
        } else if (!isHeaderExpanded) {
            setTimeout(() => setFeedbackFormShowing(true), 500);
            setHeaderExpanded(true);
        }
    };

    const showAboutHandler = () => {
        if (isFeedbackFormShowing && isHeaderExpanded) {
            setFeedbackFormShowing(false);
            setAboutShowing(true);
        } else if (isAboutShowing && isHeaderExpanded) {
            setAboutShowing(false);
            setHeaderExpanded(false);
        } else if (!isHeaderExpanded) {
            setTimeout(() => setAboutShowing(true), 500);
            setHeaderExpanded(true);
        }
    };


    return (
        <header className={`${styles.header} ${isHeaderExpanded && styles.expand}`}>
            <div className={styles.headerTop}>

                {/* TITLE */}
                <div className={styles.titleWrapper}>
                    <h1 className={styles.titleText}>Aleph Bets</h1>
                </div>

                {/* LINKS */}
                <div className={styles.headerLinksWrapper}>
                    {/* ABOUT */}
                    <div className={styles.headerLink} onClick={showAboutHandler}>
                        <span className={styles.headerLink}>About</span>
                    </div>

                    {/* FEEDBACK */}
                    <div className={styles.headerLink} onClick={showFeedbackHandler}>
                        <span className={styles.headerLink}>Feedback</span>
                    </div>
                </div>

            </div>

            {/* EXPANDED HEADER SECTION */}
            {isHeaderExpanded &&
                <div className={styles.expandedWrapper}>
                    <About show={isAboutShowing} />
                    <Feedback show={isFeedbackFormShowing} />
                </div>
            }

        </header>
    );
}
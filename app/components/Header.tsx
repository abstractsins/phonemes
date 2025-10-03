'use client';

import About from "./header/About";
import Feedback from "./header/Feedback";
import styles from "./Header.module.css";
import { useState } from "react";
import CloseButton from "./ui/CloseButton";
import Link from "next/link";

interface Props {
    expandToggle: (isExpanded: boolean) => void;
}


export default function Header({ expandToggle }: Props) {


    const [isFeedbackFormShowing, setFeedbackFormShowing] = useState(false);
    const [isAboutShowing, setAboutShowing] = useState(false);
    const [isHeaderExpanded, setHeaderExpanded] = useState(false);


    const showFeedbackHandler = () => {
        if (isFeedbackFormShowing && isHeaderExpanded) {
            setFeedbackFormShowing(false);
            setHeaderExpanded(false);
            expandToggle(false);
        } else if (isAboutShowing && isHeaderExpanded) {
            setAboutShowing(false);
            setFeedbackFormShowing(true);
        } else if (!isHeaderExpanded) {
            setTimeout(() => setFeedbackFormShowing(true), 500);
            setHeaderExpanded(true);
            expandToggle(true);
        }
    };

    const showAboutHandler = () => {
        if (isFeedbackFormShowing && isHeaderExpanded) {
            setFeedbackFormShowing(false);
            setAboutShowing(true);
        } else if (isAboutShowing && isHeaderExpanded) {
            setAboutShowing(false);
            setHeaderExpanded(false);
            expandToggle(false);
        } else if (!isHeaderExpanded) {
            setTimeout(() => setAboutShowing(true), 500);
            setHeaderExpanded(true);
            expandToggle(true);
        }
    };

    const closeHeaderHandler = () => {
        setHeaderExpanded(false);
        setAboutShowing(false);
        setFeedbackFormShowing(false);
        expandToggle(false);
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
                        <span className={`${isAboutShowing ? styles.active : ''} ${styles.headerLink}`}>About</span>
                    </div>

                    {/* FEEDBACK */}
                    <div className={styles.headerLink} onClick={showFeedbackHandler}>
                        <span className={`${isFeedbackFormShowing ? styles.active : ''} ${styles.headerLink}`}>Feedback</span>
                    </div>

                    {/* SOURCE */}
                    <div className={styles.headerLink}>
                        <Link href={'https://github.com/abstractsins/phonemes'} target="new">
                            <span className={`${styles.headerLink}`}>Source</span>
                        </Link>
                    </div>

                </div>

            </div>

            {/* EXPANDED HEADER SECTION */}
            {isHeaderExpanded &&
                <>
                    <div className={styles.expandedWrapper}>
                        <CloseButton className='header' onClick={closeHeaderHandler} />
                        <About show={isAboutShowing} />
                        <Feedback show={isFeedbackFormShowing} />
                    </div>
                </>
            }

        </header>
    );
}
'use client';

import { motion } from "motion/react"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.body}>

            <div className={`${styles.float} ${styles.teaser}`} >
                <span>Coming soon...</span>
            </div>

            <div className={styles.letterStack}>

                <motion.button
                    className={styles.letterBlock}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className={styles.letter} id="a">a</span>
                </motion.button>

                <motion.button
                    className={styles.letterBlock}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className={`${styles.letter} hebrew`} id="b">ב</span>
                </motion.button>

                <motion.button
                    className={styles.letterBlock}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className={`${styles.letter} arabic`} id="c">ح</span>
                </motion.button>

            </div>
        </div>
    );
}
'use client';

import { useState } from "react";
import Canvas from "./components/Canvas";
import Header from "./components/Header";
import { createInitialState, SoundMapProvider } from '@/app/contexts/SoundMapContext';

export default function Home() {

    const [isHeaderExpanded, setHeaderExpanded] = useState(false);

    const expandToggle = (isExpanded: boolean): void => {
        setHeaderExpanded(isExpanded);
    };

    return (
        <>
            <SoundMapProvider initial={createInitialState()} persist={false}>
                <Header expandToggle={expandToggle} />
                <Canvas headerExpanded={isHeaderExpanded} />
            </SoundMapProvider>
        </>

    );
}
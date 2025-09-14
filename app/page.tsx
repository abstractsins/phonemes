'use client';

import Canvas from "./components/Canvas";
import Header from "./components/Header";
import { createInitialState, SoundMapProvider } from '@/app/contexts/SoundMapContext';

export default function Home() {

    return (
        <>
            <SoundMapProvider initial={createInitialState()} persist={false}>
                <Header />
                <Canvas />
            </SoundMapProvider>
        </>

    );
}
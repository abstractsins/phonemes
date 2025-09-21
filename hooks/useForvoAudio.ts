// hooks/useForvoAudio.ts
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Dialect } from '@/app/types/types';
import { fetchForvo, bestAudioUrl } from '@utils/Forvo';

type Status = 'idle' | 'loading' | 'ready' | 'playing' | 'error';

interface Options {
  /** If a click happens while loading/playing, stop current and start new. Default: false (ignore). */
  autoStopOnNew?: boolean;
}

export function useForvoAudio(dialect: Dialect, opts: Options = {}) {
  const { autoStopOnNew = false } = opts;

  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [src, setSrc] = useState<string | null>(null);

  /** Lock that stays true from click until ended/error/stop/abort */
  const [isLocked, setIsLocked] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fetchCtl = useRef<AbortController | null>(null);

  useEffect(() => {
    const a = new Audio();
    a.preload = 'none';
    audioRef.current = a;

    const onPlaying = () => setStatus('playing');
    const onEnded = () => {
      setStatus('idle');
      setIsLocked(false);
    };
    const onError = () => {
      setStatus('error');
      setIsLocked(false);
    };

    a.addEventListener('playing', onPlaying);
    a.addEventListener('ended', onEnded);
    a.addEventListener('error', onError);

    return () => {
      fetchCtl.current?.abort();
      a.pause();
      a.removeEventListener('playing', onPlaying);
      a.removeEventListener('ended', onEnded);
      a.removeEventListener('error', onError);
      audioRef.current = null;
    };
  }, []);

  const stop = useCallback(() => {
    fetchCtl.current?.abort();
    fetchCtl.current = null;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setStatus('idle');
    setIsLocked(false);
  }, []);

  const play = useCallback(
    async (word: string, language: string) => {
      // spam-click guard
      if (status === 'loading' || status === 'playing') {
        if (!autoStopOnNew) return; // ignore while busy
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }

      setError(null);
      setStatus('loading');
      setIsLocked(true); // <- lock starts at click

      // cancel any previous fetch
      fetchCtl.current?.abort();
      const controller = new AbortController();
      fetchCtl.current = controller;

      try {
        const data = await fetchForvo(word, language, { signal: controller.signal });
        console.group('Forvo Fetched Data')
        console.log(data);
        console.groupEnd();
        const url = bestAudioUrl(data.items, dialect);
        if (!url) throw new Error('No audio found');

        setSrc(url);

        const a = audioRef.current!;
        a.src = url;
        setStatus('ready'); // still locked; will flip to 'playing' on event
        await a.play();     // must be from a user gesture
      } catch (e: any) {
        if (e?.name !== 'AbortError') {
          setError(e?.message ?? String(e));
          setStatus('error');
          setIsLocked(false);
        } else {
          // aborted = not playing anymore
          setIsLocked(false);
        }
      } finally {
        fetchCtl.current = null;
      }
    },
    [status, dialect, autoStopOnNew]
  );

  const replay = useCallback(async () => {
    if (!audioRef.current || !src) return;
    audioRef.current.currentTime = 0;
    try {
      setIsLocked(true);
      await audioRef.current.play();
    } catch {
      setIsLocked(false);
    }
  }, [src]);

  /** Single boolean to drive your button disabled + spinner */
  const isBusy = isLocked || status === 'loading' || status === 'playing';

  return {
    // state
    status,
    error,
    src,
    isLocked, // true from click until ended/error/stop/abort
    isBusy,   // convenience: locked OR loading/playing

    // controls
    play,      // play(word, language)
    replay,
    stop,

    // optional native controls
    audioRef,
  };
}

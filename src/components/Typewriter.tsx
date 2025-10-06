"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  words: string[];
  typingSpeed?: number;     // ms per character while typing
  deletingSpeed?: number;   // ms per character while deleting
  pauseAfterWord?: number;  // ms to wait when a word is fully typed
  initialDelay?: number;    // ms before starting
  loop?: boolean;           // delete and retype forever (even if one word)
  className?: string;
  showCursor?: boolean;
};

export default function Typewriter({
  words,
  typingSpeed = 65,
  deletingSpeed = 40,
  pauseAfterWord = 1200,
  initialDelay = 250,
  loop = false,
  className = "",
  showCursor = true,
}: Props) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);           // word index
  const [phase, setPhase] = useState<"idle"|"typing"|"pausing"|"deleting">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // kick off after initial delay
    timer.current = setTimeout(() => setPhase("typing"), initialDelay);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [initialDelay]);

  useEffect(() => {
    const word = words[i] ?? "";

    if (phase === "typing") {
      if (text.length < word.length) {
        timer.current = setTimeout(
          () => setText(word.slice(0, text.length + 1)),
          typingSpeed
        );
      } else {
        setPhase("pausing");
      }
      return;
    }

    if (phase === "pausing") {
      timer.current = setTimeout(() => {
        if (loop) setPhase("deleting");
      }, pauseAfterWord);
      return;
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        timer.current = setTimeout(
          () => setText(word.slice(0, text.length - 1)),
          deletingSpeed
        );
      } else {
        setI((prev) => (prev + 1) % words.length);
        setPhase("typing");
      }
      return;
    }
  }, [phase, text, i, words, typingSpeed, deletingSpeed, pauseAfterWord, loop]);

  // whenever we finish typing a word and loop is false, just stay paused (no delete)
  useEffect(() => {
    if (!loop && phase === "pausing") {
      if (timer.current) clearTimeout(timer.current);
    }
  }, [loop, phase]);

  return (
    <span className={className} aria-live="polite">
      {text}
      {showCursor && <span className="tw-cursor">|</span>}
    </span>
  );
}

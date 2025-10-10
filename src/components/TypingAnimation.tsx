import { useState, useEffect } from 'react';

export default function TypingAnimation() {
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  const fullText = "Hello, I'm Jonathan";

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timer = setTimeout(() => {
        setText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 75);

      return () => clearTimeout(timer);
    }
  }, [charIndex, fullText]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <div className="text-center w-full">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 break-words">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg">Software Engineer</p>
      </div>
    </div>
  );
}
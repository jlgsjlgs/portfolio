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
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-4 min-w-max">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-slate-400 text-lg">Software Engineer</p>
      </div>
    </div>
  );
}
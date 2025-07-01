"use client";
import { useState, useEffect } from "react";
import { fontCombinations, FontCombination } from "@/data/fontCombinations";

export default function FontCycler() {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [showDisplay, setShowDisplay] = useState(false);

  const currentFont = fontCombinations[currentFontIndex];

  // Load Google Font dynamically
  const loadGoogleFont = (combination: FontCombination) => {
    // Remove existing font links
    const existingLinks = document.querySelectorAll('link[data-font-cycler]');
    existingLinks.forEach(link => link.remove());

    // Create new font link
    const fontUrl = `https://fonts.googleapis.com/css2?family=${combination.heading.googleFont}&family=${combination.body.googleFont}&display=swap`;
    const link = document.createElement('link');
    link.href = fontUrl;
    link.rel = 'stylesheet';
    link.setAttribute('data-font-cycler', 'true');
    document.head.appendChild(link);
  };

  // Update CSS variables
  const updateFontVariables = (combination: FontCombination) => {
    document.documentElement.style.setProperty('--font-heading', `"${combination.heading.family}", sans-serif`);
    document.documentElement.style.setProperty('--font-body', `"${combination.body.family}", sans-serif`);
    document.documentElement.style.setProperty('--font-heading-weight', combination.heading.weight);
    document.documentElement.style.setProperty('--font-body-weight', combination.body.weight);
  };

  // Cycle to next font
  const cycleFont = () => {
    const nextIndex = (currentFontIndex + 1) % fontCombinations.length;
    setCurrentFontIndex(nextIndex);
    const nextFont = fontCombinations[nextIndex];
    
    loadGoogleFont(nextFont);
    updateFontVariables(nextFont);
    
    // Show display temporarily
    setShowDisplay(true);
    setTimeout(() => setShowDisplay(false), 2000);
  };

  // Keyboard listener
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        cycleFont();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [cycleFont]);

  // Initialize with first font
  useEffect(() => {
    loadGoogleFont(currentFont);
    updateFontVariables(currentFont);
  }, [currentFont]);

  return (
    <>
      {/* Font Display */}
      <div className={`fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 z-50 ${
        showDisplay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}>
        <div className="text-sm font-medium text-white">{currentFont.name}</div>
        <div className="text-xs text-white/70">
          H: {currentFont.heading.family} • B: {currentFont.body.family}
        </div>
        <div className="text-xs text-white/50 mt-1">
          Press &quot;F&quot; to cycle fonts ({currentFontIndex + 1}/{fontCombinations.length})
        </div>
      </div>

      {/* Instructions (always visible, subtle) */}
      <div className="fixed bottom-4 right-4 text-xs text-muted-foreground z-40 pointer-events-none">
        Press &quot;F&quot; for fonts
      </div>
    </>
  );
} 
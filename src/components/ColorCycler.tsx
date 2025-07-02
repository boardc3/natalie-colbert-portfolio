"use client";
import { useState, useEffect, useCallback } from "react";
import { colorSchemes, ColorScheme } from "@/data/colorSchemes";

export default function ColorCycler() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [showDisplay, setShowDisplay] = useState(false);

  const currentScheme = colorSchemes[currentColorIndex];

  // Update CSS variables
  const updateColorVariables = useCallback((scheme: ColorScheme) => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', scheme.colors.primary);
    root.style.setProperty('--color-primary-hover', scheme.colors.primaryHover);
    root.style.setProperty('--color-secondary', scheme.colors.secondary);
    root.style.setProperty('--color-accent', scheme.colors.accent);
    root.style.setProperty('--color-background', scheme.colors.background);
    root.style.setProperty('--color-foreground', scheme.colors.foreground);
    root.style.setProperty('--color-muted', scheme.colors.muted);
    root.style.setProperty('--color-muted-foreground', scheme.colors.mutedForeground);
    root.style.setProperty('--color-border', scheme.colors.border);
    root.style.setProperty('--color-card', scheme.colors.card);
    root.style.setProperty('--color-card-foreground', scheme.colors.cardForeground);
  }, []);

  // Cycle to next color scheme
  const cycleColors = useCallback(() => {
    setCurrentColorIndex(prevIndex => {
      const nextIndex = (prevIndex + 1) % colorSchemes.length;
      const nextScheme = colorSchemes[nextIndex];
      updateColorVariables(nextScheme);
      return nextIndex;
    });
    
    // Show display temporarily
    setShowDisplay(true);
    setTimeout(() => setShowDisplay(false), 2000);
  }, [updateColorVariables]);

  // Keyboard listener
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'c') {
        event.preventDefault();
        cycleColors();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [cycleColors]);

  // Initialize with first color scheme
  useEffect(() => {
    updateColorVariables(currentScheme);
  }, [currentScheme, updateColorVariables]);

  return (
    <>
      {/* Color Display */}
      <div className={`fixed bottom-4 left-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 z-50 ${
        showDisplay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}>
        <div className="text-sm font-medium">{currentScheme.name}</div>
        <div className="flex items-center gap-2 mt-1">
          <div 
            className="w-4 h-4 rounded-full border border-white/20" 
            style={{ backgroundColor: currentScheme.colors.primary }}
          />
          <div 
            className="w-4 h-4 rounded-full border border-white/20" 
            style={{ backgroundColor: currentScheme.colors.accent }}
          />
          <div 
            className="w-4 h-4 rounded-full border border-white/20" 
            style={{ backgroundColor: currentScheme.colors.background }}
          />
        </div>
        <div className="text-xs text-white/50 mt-1">
          Press &quot;C&quot; to cycle colors ({currentColorIndex + 1}/{colorSchemes.length})
        </div>
      </div>

      {/* Instructions (always visible, subtle) */}
      <div className="fixed bottom-4 left-4 text-xs text-muted-foreground z-40 pointer-events-none">
        Press &quot;C&quot; for colors
      </div>
    </>
  );
} 
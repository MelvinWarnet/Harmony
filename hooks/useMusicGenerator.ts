import { useCallback } from 'react';

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const SCALES = ['majeur', 'mineur', 'pentatonique', 'pentatonique mineur'];

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

const SCALE_DEGREES_COUNT: Record<string, number> = {
  majeur: 7,
  mineur: 7,
  pentatonique: 5,
  'pentatonique mineur': 5,
};

export default function useMusicGenerator() {
  const getRandomNote = useCallback(() => {
    const index = Math.floor(Math.random() * NOTES.length);
    return NOTES[index];
  }, []);

  const getRandomScale = useCallback(() => {
    const index = Math.floor(Math.random() * SCALES.length);
    return SCALES[index];
  }, []);

  const getRandomProgression = useCallback((scaleName: string): string => {
    const maxDegrees = SCALE_DEGREES_COUNT[scaleName.toLowerCase()];
    if (!maxDegrees) {
      throw new Error(`Gamme inconnue ou non supportée: ${scaleName}`);
    }
  
    const count = Math.floor(Math.random() * 4) + 2;
    const availableNumerals = ROMAN_NUMERALS.slice(0, maxDegrees);
    const progression: string[] = [];
  
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(Math.random() * availableNumerals.length);
      progression.push(availableNumerals[idx]);
    }
  
    return progression.join(' ');
  }, []);

  return {
    getRandomNote,
    getRandomScale,
    getRandomProgression,
  };
}

import { NOTES} from "@/constants/NOTES";
import type { Note } from "@/models/note";
import { SCALES } from "@/constants/SCALES";
import type { Scale } from "@/models/scale";
import { Clef} from "@/models/clef";
import { CLEFS } from "@/constants/CLEFS";


export function getRandomNote(): Note {
  const noteKeys = Object.keys(NOTES) as (keyof typeof NOTES)[];
  const randomNoteKey = noteKeys[Math.floor(Math.random() * noteKeys.length)];
  return NOTES[randomNoteKey];
}




export function getRandomNoteFromRandomScale(): { note: Note; scale: Scale } {
  const scaleKeys = Object.keys(SCALES) as (keyof typeof SCALES)[];
  const randomScaleKey = scaleKeys[Math.floor(Math.random() * scaleKeys.length)];
  const scale = SCALES[randomScaleKey];
  
  const randomNoteIndex = Math.floor(Math.random() * scale.notes.length);
  const note = scale.notes[randomNoteIndex];

  return { note, scale };
}


export function getRandomClef() : Clef {
  const clefKeys = Object.keys(CLEFS) as (keyof typeof CLEFS)[];
  const randomClefKey = clefKeys[Math.floor(Math.random() * clefKeys.length)];
  return CLEFS[randomClefKey];
}
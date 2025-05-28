import { NOTES} from "@/constants/NOTES";
import type { Note } from "@/models/note";
import { SCALES } from "@/constants/SCALES";
import type { Scale } from "@/models/scale";
import { Clef} from "@/models/clef";
import { CLEFS } from "@/constants/CLEFS";

export function getRandomNote(): Note {
  const noteKeys = Array.from(NOTES.keys());
  const randomNoteKey = noteKeys[Math.floor(Math.random() * noteKeys.length)];
  return NOTES.get(randomNoteKey)!;
}


export function getRandomNoteFromRandomScale(): { note: Note; scale: Scale } {
  const scaleKeys = Array.from(SCALES.keys());
  const randomScaleKey = scaleKeys[Math.floor(Math.random() * scaleKeys.length)];
  const scale = SCALES.get(randomScaleKey)!;

  const randomNoteIndex = Math.floor(Math.random() * scale.notes.length);
  const note = scale.notes[randomNoteIndex];

  return { scale, note };
}


export function getRandomClef() : Clef {
  const clefKeys = Array.from(CLEFS.keys());
  const randomClefKey = clefKeys[Math.floor(Math.random() * clefKeys.length)];
  return CLEFS.get(randomClefKey)!;
}
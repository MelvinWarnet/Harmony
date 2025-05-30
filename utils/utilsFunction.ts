import { NOTES} from "@/constants/NOTES";
import type { Note, NOTE_ID } from "@/models/note";
import { SCALES } from "@/constants/SCALES";
import type { Scale } from "@/models/scale";
import { Clef} from "@/models/clef";
import { CLEFS } from "@/constants/CLEFS";
import { Audio } from "expo-av";
import { audioMap } from "@/utils/audioMaps/acoustic_grand_piano-mp3AudioMap";


export const getNoteWithEnharmonics = (noteId: NOTE_ID): NOTE_ID[] => {
  const note = NOTES[noteId];
  if (!note) return [noteId];
  return [noteId, ...note.enharmonics];
};


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

export const playNoteSound = async (noteName: string, octave: string) => {
  const source = audioMap[noteName+octave];
  if (!source) {
    console.warn(`Audio for note ${noteName} not found`);
    return;
  }

  const { sound } = await Audio.Sound.createAsync(source);
  await sound.playAsync();
};
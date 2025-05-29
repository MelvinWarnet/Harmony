import { NonEmptyArray } from "@/utils/utilsType";


export enum NOTE_ID {
  C = 'C',
  C_SHARP = 'C#',
  C_DOUBLE_SHARP = 'C𝄪',
  C_FLAT = 'C♭',
  C_DOUBLE_FLAT = 'C𝄫',
  C_NATURAL = 'C♮',
  D = 'D',
  D_SHARP = 'D#',
  D_DOUBLE_SHARP = 'D𝄪',
  D_FLAT = 'D♭',
  D_DOUBLE_FLAT = 'D𝄫',
  D_NATURAL = 'D♮',
  E = 'E',
  E_SHARP = 'E#',
  E_DOUBLE_SHARP = 'E𝄪',
  E_FLAT = 'E♭',
  E_DOUBLE_FLAT = 'E𝄫',
  E_NATURAL = 'E♮',
  F = 'F',
  F_SHARP = 'F#',
  F_DOUBLE_SHARP = 'F𝄪',
  F_FLAT = 'F♭',
  F_DOUBLE_FLAT = 'F𝄫',
  F_NATURAL = 'F♮',
  G = 'G',
  G_SHARP = 'G#',
  G_DOUBLE_SHARP = 'G𝄪',
  G_FLAT = 'G♭',
  G_DOUBLE_FLAT = 'G𝄫',
  G_NATURAL = 'G♮',
  A = 'A',
  A_SHARP = 'A#',
  A_DOUBLE_SHARP = 'A𝄪',
  A_FLAT = 'A♭',
  A_DOUBLE_FLAT = 'A𝄫',
  A_NATURAL = 'A♮',
  B = 'B',
  B_SHARP = 'B#',
  B_DOUBLE_SHARP = 'B𝄪',
  B_FLAT = 'B♭',
  B_DOUBLE_FLAT = 'B𝄫',
  B_NATURAL = 'B♮',
}

export enum ACCIDENTAL {
  SHARP = '♯',
  DOUBLE_SHARP = '𝄪',
  FLAT = '♭',
  DOUBLE_FLAT = '𝄫',
  NATURAL = '♮',
  NONE = '',
}

export type Note = {
  id: NOTE_ID;
  accidental: ACCIDENTAL;
  enharmonics: NonEmptyArray<NOTE_ID>;
  name: string;
}
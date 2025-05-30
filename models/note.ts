import { NonEmptyArray } from "@/utils/utilsType";


export enum NOTE_ID {
  C = 'C',
  C_SHARP = 'C_SHARP',
  C_DOUBLE_SHARP = 'C_DOUBLE_SHARP',
  C_FLAT = 'C_FLAT',
  C_DOUBLE_FLAT = 'C_DOUBLE_FLAT',
  C_NATURAL = 'C_NATURAL',
  D = 'D',
  D_SHARP = 'D_SHARP',
  D_DOUBLE_SHARP = 'D_DOUBLE_SHARP',
  D_FLAT = 'D_FLAT',
  D_DOUBLE_FLAT = 'D_DOUBLE_FLAT',
  D_NATURAL = 'D_NATURAL',
  E = 'E',
  E_SHARP = 'E_SHARP',
  E_DOUBLE_SHARP = 'E_DOUBLE_SHARP',
  E_FLAT = 'E_FLAT',
  E_DOUBLE_FLAT = 'E_DOUBLE_FLAT',
  E_NATURAL = 'E_NATURAL',
  F = 'F',
  F_SHARP = 'F_SHARP',
  F_DOUBLE_SHARP = 'F_DOUBLE_SHARP',
  F_FLAT = 'F_FLAT',
  F_DOUBLE_FLAT = 'F_DOUBLE_FLAT',
  F_NATURAL = 'F_NATURAL',
  G = 'G',
  G_SHARP = 'G_SHARP',
  G_DOUBLE_SHARP = 'G_DOUBLE_SHARP',
  G_FLAT = 'G_FLAT',
  G_DOUBLE_FLAT = 'G_DOUBLE_FLAT',
  G_NATURAL = 'G_NATURAL',
  A = 'A',
  A_SHARP = 'A_SHARP',
  A_DOUBLE_SHARP = 'A_DOUBLE_SHARP',
  A_FLAT = 'A_FLAT',
  A_DOUBLE_FLAT = 'A_DOUBLE_FLAT',
  A_NATURAL = 'A_NATURAL',
  B = 'B',
  B_SHARP = 'B_SHARP',
  B_DOUBLE_SHARP = 'B_DOUBLE_SHARP',
  B_FLAT = 'B_FLAT',
  B_DOUBLE_FLAT = 'B_DOUBLE_FLAT',
  B_NATURAL = 'B_NATURAL',
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
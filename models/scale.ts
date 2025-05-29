import { Note } from "@/models/note";
import { NonEmptyArray } from "@/utils/utilsType";


export enum SCALE_ID {
  MAJOR_C = 'MAJOR_C',
  MAJOR_F = 'MAJOR_F',
  MAJOR_G = 'MAJOR_G',
  MAJOR_B_FLAT = 'MAJOR_B_FLAT',
  MAJOR_D = 'MAJOR_D',
  MAJOR_E_FLAT = 'MAJOR_E_FLAT',
  MAJOR_A = 'MAJOR_A',
  MAJOR_A_FLAT = 'MAJOR_A_FLAT',
  MAJOR_E = 'MAJOR_E',
  MAJOR_D_FLAT = 'MAJOR_D_FLAT',
  MAJOR_B = 'MAJOR_B',
  MAJOR_G_FLAT = 'MAJOR_G_FLAT',
  MAJOR_F_SHARP = 'MAJOR_F_SHARP',
  MAJOR_C_FLAT = 'MAJOR_C_FLAT',
  MAJOR_C_SHARP = 'MAJOR_C_SHARP',
  MAJOR_F_FLAT = 'MAJOR_F_FLAT',
  MAJOR_A_SHARP = 'MAJOR_A_SHARP',
  MAJOR_E_SHARP = 'MAJOR_E_SHARP',
  MAJOR_D_SHARP = 'MAJOR_D_SHARP',
  MAJOR_B_SHARP = 'MAJOR_B_SHARP',
  MAJOR_G_SHARP = 'MAJOR_G_SHARP',
}



export enum SCALE_TYPE {
  MAJOR = 'MAJOR',
  MINOR_NATURAL = 'MINOR_NATURAL',
}


export type Scale = {
  id: SCALE_ID;
  name: string;
  type: SCALE_TYPE;
  key_signature: Note[]; // The notes in the key signature are ordered followin the order of the circle of fifths, starting from F# for SHARPS and B♭ for FLATS.
  notes: NonEmptyArray<Note>;
}
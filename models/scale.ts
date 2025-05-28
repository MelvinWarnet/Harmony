import { Note } from "@/models/note";


export enum SCALE_TYPE {
  MAJOR = 'MAJOR',
  MINOR_NATURAL = 'MINOR_NATURAL',
}


export type Scale = {
  name: string;
  type: SCALE_TYPE;
  key_signature: Note[]; // The notes in the key signature are ordered followin the order of the circle of fifths, starting from F# for SHARPS and B♭ for FLATS.
  notes: Note[];
}
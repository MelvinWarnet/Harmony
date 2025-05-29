import { NonEmptyArray } from "@/utils/utilsType";
import { NOTE_ID } from "./note";

export enum CLEF_ID {
  G = 'G',
  F = 'F',
}

export type Clef = {
  id: CLEF_ID;
  name: string;
  symbolStaffPosition: [number, number];
  noteStaffYPositions: Record<NOTE_ID, NonEmptyArray<number>>; // The first Y position in the array corresponds to the note's position when it appears in the staff's key signature.
};

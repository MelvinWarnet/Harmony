export enum CLEF_TYPE {
  G = 'G',
  F = 'F',
}

export type Clef = {
  id: string;
  type: CLEF_TYPE;
  name: string;
  symbolStaffPosition: [number, number];
  noteStaffYPositions?: Map<string, number[]>; // The first Y position in the array corresponds to the note's position when it appears in the staff's key signature.
};

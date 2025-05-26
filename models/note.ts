export type Note = {
  id: string;
  name: string;
  staffPosition: {
    GStaff: [x : number, y : number][];
    FStaff: [x : number, y : number][];
  }
};

export enum ACCIDENTAL {
  SHARP = '♯',
  DOUBLE_SHARP = '𝄪',
  FLAT = '♭',
  DOUBLE_FLAT = '𝄫',
  NATURAL = '♮',
  NONE = '',
}

export type Note_evolv = {
  accidental: ACCIDENTAL;
  name: string;

}
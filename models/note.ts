export enum ACCIDENTAL {
  SHARP = '♯',
  DOUBLE_SHARP = '𝄪',
  FLAT = '♭',
  DOUBLE_FLAT = '𝄫',
  NATURAL = '♮',
  NONE = '',
}

export type Note = {
  id: string;
  accidental: ACCIDENTAL;
  name: string;

}
import { Note_evolv } from "@/models/note";


export enum SCALE_TYPE {
  MAJOR = 'MAJOR',
  MINOR_NATURAL = 'MINOR_NATURAL',
}


export type Scale = {
  name: string;
  type: SCALE_TYPE;
  key_signature: Note_evolv[];
  notes: Note_evolv[];
}
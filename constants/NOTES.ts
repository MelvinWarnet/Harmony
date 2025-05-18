// NOTES_MAP.ts
import { Note } from "@/models/note";

export const NOTES = new Map<string, Note>([
  ["C", { id: "C", name: "Do", staffPosition: { GStaff: [[190, 70]], FStaff: [[190, 90]] } }],
  ["C#", { id: "C#", name: "Do#", staffPosition: { GStaff: [[0, 0]], FStaff: [[0, 0]] } }],
  ["D", { id: "D", name: "Ré", staffPosition: { GStaff: [[190, 130], [190, 60]], FStaff: [[190, 80]] } }],
  ["D#", { id: "D#", name: "Ré#", staffPosition: { GStaff: [[0, 0]], FStaff: [[0, 0]] } }],
  ["E", { id: "E", name: "Mi", staffPosition: { GStaff: [[190, 120], [190, 50]], FStaff: [[190, 70]] } }],
  ["F", { id: "F", name: "Fa", staffPosition: { GStaff: [[190, 110], [190, 40]], FStaff: [[190, 60], [190, 130]] } }],
  ["F#", { id: "F#", name: "Fa#", staffPosition: { GStaff: [[0, 0]], FStaff: [[0, 0]] } }],
  ["G", { id: "G", name: "Sol", staffPosition: { GStaff: [[190, 100], [190, 30]], FStaff: [[190, 50], [190, 120]] } }],
  ["G#", { id: "G#", name: "Sol#", staffPosition: { GStaff: [[0, 0]], FStaff: [[0, 0]] } }],
  ["A", { id: "A", name: "La", staffPosition: { GStaff: [[190, 90]], FStaff: [[190, 40], [190, 110]] } }],
  ["A#", { id: "A#", name: "La#", staffPosition: { GStaff: [[0, 0]], FStaff: [[0, 0]] } }],
  ["B", { id: "B", name: "Si", staffPosition: { GStaff: [[190, 80]], FStaff: [[190, 30], [190, 100]] } }],
]);



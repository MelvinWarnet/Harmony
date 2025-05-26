import { Note, Note_evolv, ACCIDENTAL } from "@/models/note";

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

export const NOTES_EVOLV = new Map<string, Note_evolv>([
  ["C", { accidental: ACCIDENTAL.NONE, name: "Do" }],
  ["C_SHARP", { accidental: ACCIDENTAL.SHARP, name: "Do#" }],
  ["C_DOUBLE_SHARP", { accidental: ACCIDENTAL.DOUBLE_SHARP, name: "Do𝄪" }],
  ["C_FLAT", { accidental: ACCIDENTAL.FLAT, name: "Do♭" }],
  ["C_DOUBLE_FLAT", { accidental: ACCIDENTAL.DOUBLE_FLAT, name: "Do𝄫" }],
  ["C_NATURAL", { accidental: ACCIDENTAL.NATURAL, name: "Do♮" }],

  ["D", { accidental: ACCIDENTAL.NONE, name: "Ré" }],
  ["D_SHARP", { accidental: ACCIDENTAL.SHARP, name: "Ré#" }],
  ["D_DOUBLE_SHARP", { accidental: ACCIDENTAL.DOUBLE_SHARP, name: "Ré𝄪" }],
  ["D_FLAT", { accidental: ACCIDENTAL.FLAT, name: "Ré♭" }],
  ["D_DOUBLE_FLAT", { accidental: ACCIDENTAL.DOUBLE_FLAT, name: "Ré𝄫" }],
  ["D_NATURAL", { accidental: ACCIDENTAL.NATURAL, name: "Ré♮" }],

  ["E", { accidental: ACCIDENTAL.NONE, name: "Mi" }],
  ["E_SHARP", { accidental: ACCIDENTAL.SHARP, name: "Mi#" }],
  ["E_DOUBLE_SHARP", { accidental: ACCIDENTAL.DOUBLE_SHARP, name: "Mi𝄪" }],
  ["E_FLAT", { accidental: ACCIDENTAL.FLAT, name: "Mi♭" }],
  ["E_DOUBLE_FLAT", { accidental: ACCIDENTAL.DOUBLE_FLAT, name: "Mi𝄫" }],
  ["E_NATURAL", { accidental: ACCIDENTAL.NATURAL, name: "Mi♮" }],

  ["F", { accidental: ACCIDENTAL.NONE, name: "Fa" }],
  ["F_SHARP", { accidental: ACCIDENTAL.SHARP, name: "Fa#" }],
  ["F_DOUBLE_SHARP", { accidental: ACCIDENTAL.DOUBLE_SHARP, name: "Fa𝄪" }],
  ["F_FLAT", { accidental: ACCIDENTAL.FLAT, name: "Fa♭" }],
  ["F_DOUBLE_FLAT", { accidental: ACCIDENTAL.DOUBLE_FLAT, name: "Fa𝄫" }],
  ["F_NATURAL", { accidental: ACCIDENTAL.NATURAL, name: "Fa♮" }],

  ["G", { accidental: ACCIDENTAL.NONE, name: "Sol" }],
  ["G_SHARP", { accidental: ACCIDENTAL.SHARP, name: "Sol#" }],
  ["G_DOUBLE_SHARP", { accidental: ACCIDENTAL.DOUBLE_SHARP, name: "Sol𝄪" }],
  ["G_FLAT", { accidental: ACCIDENTAL.FLAT, name: "Sol♭" }],
  ["G_DOUBLE_FLAT", { accidental: ACCIDENTAL.DOUBLE_FLAT, name: "Sol𝄫" }],
  ["G_NATURAL", { accidental: ACCIDENTAL.NATURAL, name: "Sol♮" }],

  ["A", { accidental: ACCIDENTAL.NONE, name: "La" }],
  ["A_SHARP", { accidental: ACCIDENTAL.SHARP, name: "La#" }],
  ["A_DOUBLE_SHARP", { accidental: ACCIDENTAL.DOUBLE_SHARP, name: "La𝄪" }],
  ["A_FLAT", { accidental: ACCIDENTAL.FLAT, name: "La♭" }],
  ["A_DOUBLE_FLAT", { accidental: ACCIDENTAL.DOUBLE_FLAT, name: "La𝄫" }],
  ["A_NATURAL", { accidental: ACCIDENTAL.NATURAL, name: "La♮" }],

  ["B", { accidental: ACCIDENTAL.NONE, name: "Si" }],
  ["B_SHARP", { accidental: ACCIDENTAL.SHARP, name: "Si#" }],
  ["B_DOUBLE_SHARP", { accidental: ACCIDENTAL.DOUBLE_SHARP, name: "Si𝄪" }],
  ["B_FLAT", { accidental: ACCIDENTAL.FLAT, name: "Si♭" }],
  ["B_DOUBLE_FLAT", { accidental: ACCIDENTAL.DOUBLE_FLAT, name: "Si𝄫" }],
  ["B_NATURAL", { accidental: ACCIDENTAL.NATURAL, name: "Si♮" }],
]);



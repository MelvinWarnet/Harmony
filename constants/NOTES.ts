import { Note, ACCIDENTAL } from "@/models/note";



export const NOTES = new Map<string, Note>([
  ["C", { id: "C", accidental: ACCIDENTAL.NONE, name: "Do" }],
  ["C_SHARP", { id: "C_SHARP", accidental: ACCIDENTAL.SHARP, name: "Do#" }],
  ["C_DOUBLE_SHARP", { id: "C_DOUBLE_SHARP", accidental: ACCIDENTAL.DOUBLE_SHARP, name: "Do𝄪" }],
  ["C_FLAT", { id: "C_FLAT", accidental: ACCIDENTAL.FLAT, name: "Do♭" }],
  ["C_DOUBLE_FLAT", { id: "C_DOUBLE_FLAT", accidental: ACCIDENTAL.DOUBLE_FLAT, name: "Do𝄫" }],
  ["C_NATURAL", { id: "C_NATURAL", accidental: ACCIDENTAL.NATURAL, name: "Do♮" }],

  ["D", { id: "D", accidental: ACCIDENTAL.NONE, name: "Ré" }],
  ["D_SHARP", { id: "D_SHARP", accidental: ACCIDENTAL.SHARP, name: "Ré#" }],
  ["D_DOUBLE_SHARP", { id: "D_DOUBLE_SHARP", accidental: ACCIDENTAL.DOUBLE_SHARP, name: "Ré𝄪" }],
  ["D_FLAT", { id: "D_FLAT", accidental: ACCIDENTAL.FLAT, name: "Ré♭" }],
  ["D_DOUBLE_FLAT", { id: "D_DOUBLE_FLAT", accidental: ACCIDENTAL.DOUBLE_FLAT, name: "Ré𝄫" }],
  ["D_NATURAL", { id: "D_NATURAL", accidental: ACCIDENTAL.NATURAL, name: "Ré♮" }],

  ["E", { id: "E", accidental: ACCIDENTAL.NONE, name: "Mi" }],
  ["E_SHARP", { id: "E_SHARP", accidental: ACCIDENTAL.SHARP, name: "Mi#" }],
  ["E_DOUBLE_SHARP", { id: "E_DOUBLE_SHARP", accidental: ACCIDENTAL.DOUBLE_SHARP, name: "Mi𝄪" }],
  ["E_FLAT", { id: "E_FLAT", accidental: ACCIDENTAL.FLAT, name: "Mi♭" }],
  ["E_DOUBLE_FLAT", { id: "E_DOUBLE_FLAT", accidental: ACCIDENTAL.DOUBLE_FLAT, name: "Mi𝄫" }],
  ["E_NATURAL", { id: "E_NATURAL", accidental: ACCIDENTAL.NATURAL, name: "Mi♮" }],

  ["F", { id: "F", accidental: ACCIDENTAL.NONE, name: "Fa" }],
  ["F_SHARP", { id: "F_SHARP", accidental: ACCIDENTAL.SHARP, name: "Fa#" }],
  ["F_DOUBLE_SHARP", { id: "F_DOUBLE_SHARP", accidental: ACCIDENTAL.DOUBLE_SHARP, name: "Fa𝄪" }],
  ["F_FLAT", { id: "F_FLAT", accidental: ACCIDENTAL.FLAT, name: "Fa♭" }],
  ["F_DOUBLE_FLAT", { id: "F_DOUBLE_FLAT", accidental: ACCIDENTAL.DOUBLE_FLAT, name: "Fa𝄫" }],
  ["F_NATURAL", { id: "F_NATURAL", accidental: ACCIDENTAL.NATURAL, name: "Fa♮" }],

  ["G", { id: "G", accidental: ACCIDENTAL.NONE, name: "Sol" }],
  ["G_SHARP", { id: "G_SHARP", accidental: ACCIDENTAL.SHARP, name: "Sol#" }],
  ["G_DOUBLE_SHARP", { id: "G_DOUBLE_SHARP", accidental: ACCIDENTAL.DOUBLE_SHARP, name: "Sol𝄪" }],
  ["G_FLAT", { id: "G_FLAT", accidental: ACCIDENTAL.FLAT, name: "Sol♭" }],
  ["G_DOUBLE_FLAT", { id: "G_DOUBLE_FLAT", accidental: ACCIDENTAL.DOUBLE_FLAT, name: "Sol𝄫" }],
  ["G_NATURAL", { id: "G_NATURAL", accidental: ACCIDENTAL.NATURAL, name: "Sol♮" }],

  ["A", { id: "A", accidental: ACCIDENTAL.NONE, name: "La" }],
  ["A_SHARP", { id: "A_SHARP", accidental: ACCIDENTAL.SHARP, name: "La#" }],
  ["A_DOUBLE_SHARP", { id: "A_DOUBLE_SHARP", accidental: ACCIDENTAL.DOUBLE_SHARP, name: "La𝄪" }],
  ["A_FLAT", { id: "A_FLAT", accidental: ACCIDENTAL.FLAT, name: "La♭" }],
  ["A_DOUBLE_FLAT", { id: "A_DOUBLE_FLAT", accidental: ACCIDENTAL.DOUBLE_FLAT, name: "La𝄫" }],
  ["A_NATURAL", { id: "A_NATURAL", accidental: ACCIDENTAL.NATURAL, name: "La♮" }],

  ["B", { id: "B", accidental: ACCIDENTAL.NONE, name: "Si" }],
  ["B_SHARP", { id: "B_SHARP", accidental: ACCIDENTAL.SHARP, name: "Si#" }],
  ["B_DOUBLE_SHARP", { id: "B_DOUBLE_SHARP", accidental: ACCIDENTAL.DOUBLE_SHARP, name: "Si𝄪" }],
  ["B_FLAT", { id: "B_FLAT", accidental: ACCIDENTAL.FLAT, name: "Si♭" }],
  ["B_DOUBLE_FLAT", { id: "B_DOUBLE_FLAT", accidental: ACCIDENTAL.DOUBLE_FLAT, name: "Si𝄫" }],
  ["B_NATURAL", { id: "B_NATURAL", accidental: ACCIDENTAL.NATURAL, name: "Si♮" }],
]);



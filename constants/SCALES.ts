
import { Scale, SCALE_TYPE } from "@/models/scale";
import { NOTES} from "@/constants/NOTES";

export const SCALES = new Map<string, Scale>([
  ["C_MAJOR", {
    name: "Do Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES.get("C")!,
      NOTES.get("D")!,
      NOTES.get("E")!,
      NOTES.get("F")!,
      NOTES.get("G")!,
      NOTES.get("A")!,
      NOTES.get("B")!
    ],
  }],
  ["F_MAJOR", {
    name: "Fa Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("B_FLAT")!
    ],
    notes: [
      NOTES.get("F")!,
      NOTES.get("G")!,
      NOTES.get("A")!,
      NOTES.get("B_FLAT")!,
      NOTES.get("C")!,
      NOTES.get("D")!,
      NOTES.get("E")!
    ],
  }],
  ["G_MAJOR", {
    name: "Sol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("F_SHARP")!
    ],
    notes: [
      NOTES.get("G")!,
      NOTES.get("A")!,
      NOTES.get("B")!,
      NOTES.get("C")!,
      NOTES.get("D")!,
      NOTES.get("E")!,
      NOTES.get("F_SHARP")!
    ],
  }],
  ["B_FLAT_MAJOR", {
    name: "Si bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("B_FLAT")!,
      NOTES.get("E_FLAT")!
    ],
    notes: [
      NOTES.get("B_FLAT")!,
      NOTES.get("C")!,
      NOTES.get("D")!,
      NOTES.get("E_FLAT")!,
      NOTES.get("F")!,
      NOTES.get("G")!,
      NOTES.get("A")!
    ],
  }],
  ["D_MAJOR", {
    name: "Ré Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("F_SHARP")!,
      NOTES.get("C_SHARP")!
    ],
    notes: [
      NOTES.get("D")!,
      NOTES.get("E")!,
      NOTES.get("F_SHARP")!,
      NOTES.get("G")!,
      NOTES.get("A")!,
      NOTES.get("B")!,
      NOTES.get("C_SHARP")!
    ],
  }],
  ["E_FLAT_MAJOR", {
    name: "Mi bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("B_FLAT")!,
      NOTES.get("E_FLAT")!,
      NOTES.get("A_FLAT")!
    ],
    notes: [
      NOTES.get("E_FLAT")!,
      NOTES.get("F")!,
      NOTES.get("G")!,
      NOTES.get("A_FLAT")!,
      NOTES.get("B_FLAT")!,
      NOTES.get("C")!,
      NOTES.get("D")!
    ],
  }],
  ["A_MAJOR", {
    name: "La Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("F_SHARP")!,
      NOTES.get("C_SHARP")!,
      NOTES.get("G_SHARP")!
    ],
    notes: [
      NOTES.get("A")!,
      NOTES.get("B")!,
      NOTES.get("C_SHARP")!,
      NOTES.get("D")!,
      NOTES.get("E")!,
      NOTES.get("F_SHARP")!,
      NOTES.get("G_SHARP")!
    ],
  }],
  ["A_FLAT_MAJOR", {
    name: "La bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("B_FLAT")!,
      NOTES.get("E_FLAT")!,
      NOTES.get("A_FLAT")!,
      NOTES.get("D_FLAT")!
    ],
    notes: [
      NOTES.get("A_FLAT")!,
      NOTES.get("B_FLAT")!,
      NOTES.get("C")!,
      NOTES.get("D_FLAT")!,
      NOTES.get("E_FLAT")!,
      NOTES.get("F")!,
      NOTES.get("G")!
    ],
  }],
  ["E_MAJOR", {
    name: "Mi Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("F_SHARP")!,
      NOTES.get("C_SHARP")!,
      NOTES.get("G_SHARP")!,
      NOTES.get("D_SHARP")!
    ],
    notes: [
      NOTES.get("E")!,
      NOTES.get("F_SHARP")!,
      NOTES.get("G_SHARP")!,
      NOTES.get("A")!,
      NOTES.get("B")!,
      NOTES.get("C_SHARP")!,
      NOTES.get("D_SHARP")!
    ],
  }],
  ["D_FLAT_MAJOR", {
    name: "Ré bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("B_FLAT")!,
      NOTES.get("E_FLAT")!,
      NOTES.get("A_FLAT")!,
      NOTES.get("D_FLAT")!
    ],
    notes: [
      NOTES.get("D_FLAT")!,
      NOTES.get("E_FLAT")!,
      NOTES.get("F")!,
      NOTES.get("G_FLAT")!,
      NOTES.get("A_FLAT")!,
      NOTES.get("B_FLAT")!,
      NOTES.get("C")!
    ],
  }],
  ["B_MAJOR", {
    name: "Si Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("F_SHARP")!,
      NOTES.get("C_SHARP")!,
      NOTES.get("G_SHARP")!,
      NOTES.get("D_SHARP")!,
      NOTES.get("A_SHARP")!
    ],
    notes: [
      NOTES.get("B")!,
      NOTES.get("C_SHARP")!,
      NOTES.get("D_SHARP")!,
      NOTES.get("E")!,
      NOTES.get("F_SHARP")!,
      NOTES.get("G_SHARP")!,
      NOTES.get("A_SHARP")!
    ],
  }],
  ["G_FLAT_MAJOR", {
    name: "Sol bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("B_FLAT")!,
      NOTES.get("E_FLAT")!,
      NOTES.get("A_FLAT")!,
      NOTES.get("D_FLAT")!,
      NOTES.get("G_FLAT")!
    ],
    notes: [
      NOTES.get("G_FLAT")!,
      NOTES.get("A_FLAT")!,
      NOTES.get("B_FLAT")!,
      NOTES.get("C")!,
      NOTES.get("D_FLAT")!,
      NOTES.get("E_FLAT")!,
      NOTES.get("F")!
    ],
  }],
  ["F_SHARP_MAJOR", {
    name: "Fa dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("F_SHARP")!,
      NOTES.get("C_SHARP")!,
      NOTES.get("G_SHARP")!,
      NOTES.get("D_SHARP")!,
      NOTES.get("A_SHARP")!,
      NOTES.get("E_SHARP")!
    ],
    notes: [
      NOTES.get("F_SHARP")!,
      NOTES.get("G_SHARP")!,
      NOTES.get("A_SHARP")!,
      NOTES.get("B")!,
      NOTES.get("C_SHARP")!,
      NOTES.get("D_SHARP")!,
      NOTES.get("E_SHARP")!
    ],
  }],
  ["C_FLAT_MAJOR", {
    name: "Do bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("B_FLAT")!,
      NOTES.get("E_FLAT")!,
      NOTES.get("A_FLAT")!,
      NOTES.get("D_FLAT")!,
      NOTES.get("G_FLAT")!,
      NOTES.get("C_FLAT")!,
      NOTES.get("F_FLAT")!

    ],
    notes: [
      NOTES.get("C_FLAT")!,
      NOTES.get("D_FLAT")!,
      NOTES.get("E_FLAT")!,
      NOTES.get("F_FLAT")!,
      NOTES.get("G_FLAT")!,
      NOTES.get("A_FLAT")!,
      NOTES.get("B_FLAT")!
    ],
  }],
  ["C_SHARP_MAJOR", {
    name: "Do dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES.get("F_SHARP")!,
      NOTES.get("C_SHARP")!,
      NOTES.get("G_SHARP")!,
      NOTES.get("D_SHARP")!,
      NOTES.get("A_SHARP")!,
      NOTES.get("E_SHARP")!,
      NOTES.get("B_SHARP")!
    ],
    notes: [
      NOTES.get("C_SHARP")!,
      NOTES.get("D_SHARP")!,
      NOTES.get("E_SHARP")!,
      NOTES.get("F_SHARP")!,
      NOTES.get("G_SHARP")!,
      NOTES.get("A_SHARP")!,
      NOTES.get("B_SHARP")!
    ],
  }],
  ["F_FLAT_MAJOR", {
    name: "Fa bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES.get("F_FLAT")!,
      NOTES.get("G_FLAT")!,
      NOTES.get("A_FLAT")!,
      NOTES.get("B_DOUBLE_FLAT")!,
      NOTES.get("C_FLAT")!,
      NOTES.get("D_FLAT")!,
      NOTES.get("E_FLAT")!
    ],
  }],
  ["A_SHARP_MAJOR", {
    name: "La dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES.get("A_SHARP")!,
      NOTES.get("B_SHARP")!,
      NOTES.get("C_DOUBLE_SHARP")!,
      NOTES.get("D_SHARP")!,
      NOTES.get("E_SHARP")!,
      NOTES.get("F_DOUBLE_SHARP")!,
      NOTES.get("G_DOUBLE_SHARP")!
    ],
  }],
  ["E_SHARP_MAJOR", {
    name: "Mi dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES.get("E_SHARP")!,
      NOTES.get("F_DOUBLE_SHARP")!,
      NOTES.get("G_DOUBLE_SHARP")!,
      NOTES.get("A_SHARP")!,
      NOTES.get("B_SHARP")!,
      NOTES.get("C_DOUBLE_SHARP")!,
      NOTES.get("D_DOUBLE_SHARP")!
    ],
  }],
  ["D_SHARP_MAJOR", {
    name: "Ré dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES.get("D_SHARP")!,
      NOTES.get("E_SHARP")!,
      NOTES.get("F_DOUBLE_SHARP")!,
      NOTES.get("G_SHARP")!,
      NOTES.get("A_SHARP")!,
      NOTES.get("B_SHARP")!,
      NOTES.get("C_DOUBLE_SHARP")!
    ],
  }],
  ["B_SHARP_MAJOR", {
    name: "Si dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES.get("B_SHARP")!,
      NOTES.get("C_DOUBLE_SHARP")!,
      NOTES.get("D_DOUBLE_SHARP")!,
      NOTES.get("E_SHARP")!,
      NOTES.get("F_DOUBLE_SHARP")!,
      NOTES.get("G_DOUBLE_SHARP")!,
      NOTES.get("A_DOUBLE_SHARP")!
    ],
  }],
  ["G_SHARP_MAJOR", {
    name: "Sol dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES.get("G_SHARP")!,
      NOTES.get("A_SHARP")!,
      NOTES.get("B_SHARP")!,
      NOTES.get("C_SHARP")!,
      NOTES.get("D_SHARP")!,
      NOTES.get("E_SHARP")!,
      NOTES.get("F_DOUBLE_SHARP")!
    ],
  }],
]);

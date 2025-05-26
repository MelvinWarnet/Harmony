
import { Scale, SCALE_TYPE } from "@/models/scale";
import { NOTES_EVOLV } from "@/constants/NOTES";

export const SCALES = new Map<string, Scale>([
  ["C_MAJOR", {
    name: "Do Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES_EVOLV.get("C")!,
      NOTES_EVOLV.get("D")!,
      NOTES_EVOLV.get("E")!,
      NOTES_EVOLV.get("F")!,
      NOTES_EVOLV.get("G")!,
      NOTES_EVOLV.get("A")!,
      NOTES_EVOLV.get("B")!
    ],
  }],
  ["F_MAJOR", {
    name: "Fa Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("B_FLAT")!
    ],
    notes: [
      NOTES_EVOLV.get("F")!,
      NOTES_EVOLV.get("G")!,
      NOTES_EVOLV.get("A")!,
      NOTES_EVOLV.get("B_FLAT")!,
      NOTES_EVOLV.get("C")!,
      NOTES_EVOLV.get("D")!,
      NOTES_EVOLV.get("E")!
    ],
  }],
  ["G_MAJOR", {
    name: "Sol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("F_SHARP")!
    ],
    notes: [
      NOTES_EVOLV.get("G")!,
      NOTES_EVOLV.get("A")!,
      NOTES_EVOLV.get("B")!,
      NOTES_EVOLV.get("C")!,
      NOTES_EVOLV.get("D")!,
      NOTES_EVOLV.get("E")!,
      NOTES_EVOLV.get("F_SHARP")!
    ],
  }],
  ["B_FLAT_MAJOR", {
    name: "Si bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("B_FLAT")!,
      NOTES_EVOLV.get("E_FLAT")!
    ],
    notes: [
      NOTES_EVOLV.get("B_FLAT")!,
      NOTES_EVOLV.get("C")!,
      NOTES_EVOLV.get("D")!,
      NOTES_EVOLV.get("E_FLAT")!,
      NOTES_EVOLV.get("F")!,
      NOTES_EVOLV.get("G")!,
      NOTES_EVOLV.get("A")!
    ],
  }],
  ["D_MAJOR", {
    name: "Ré Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("F_SHARP")!,
      NOTES_EVOLV.get("C_SHARP")!
    ],
    notes: [
      NOTES_EVOLV.get("D")!,
      NOTES_EVOLV.get("E")!,
      NOTES_EVOLV.get("F_SHARP")!,
      NOTES_EVOLV.get("G")!,
      NOTES_EVOLV.get("A")!,
      NOTES_EVOLV.get("B")!,
      NOTES_EVOLV.get("C_SHARP")!
    ],
  }],
  ["E_FLAT_MAJOR", {
    name: "Mi bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("B_FLAT")!,
      NOTES_EVOLV.get("E_FLAT")!,
      NOTES_EVOLV.get("A_FLAT")!
    ],
    notes: [
      NOTES_EVOLV.get("E_FLAT")!,
      NOTES_EVOLV.get("F")!,
      NOTES_EVOLV.get("G")!,
      NOTES_EVOLV.get("A_FLAT")!,
      NOTES_EVOLV.get("B_FLAT")!,
      NOTES_EVOLV.get("C")!,
      NOTES_EVOLV.get("D")!
    ],
  }],
  ["A_MAJOR", {
    name: "La Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("F_SHARP")!,
      NOTES_EVOLV.get("C_SHARP")!,
      NOTES_EVOLV.get("G_SHARP")!
    ],
    notes: [
      NOTES_EVOLV.get("A")!,
      NOTES_EVOLV.get("B")!,
      NOTES_EVOLV.get("C_SHARP")!,
      NOTES_EVOLV.get("D")!,
      NOTES_EVOLV.get("E")!,
      NOTES_EVOLV.get("F_SHARP")!,
      NOTES_EVOLV.get("G_SHARP")!
    ],
  }],
  ["A_FLAT_MAJOR", {
    name: "La bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("B_FLAT")!,
      NOTES_EVOLV.get("E_FLAT")!,
      NOTES_EVOLV.get("A_FLAT")!,
      NOTES_EVOLV.get("D_FLAT")!
    ],
    notes: [
      NOTES_EVOLV.get("A_FLAT")!,
      NOTES_EVOLV.get("B_FLAT")!,
      NOTES_EVOLV.get("C")!,
      NOTES_EVOLV.get("D_FLAT")!,
      NOTES_EVOLV.get("E_FLAT")!,
      NOTES_EVOLV.get("F")!,
      NOTES_EVOLV.get("G")!
    ],
  }],
  ["E_MAJOR", {
    name: "Mi Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("F_SHARP")!,
      NOTES_EVOLV.get("C_SHARP")!,
      NOTES_EVOLV.get("G_SHARP")!,
      NOTES_EVOLV.get("D_SHARP")!
    ],
    notes: [
      NOTES_EVOLV.get("E")!,
      NOTES_EVOLV.get("F_SHARP")!,
      NOTES_EVOLV.get("G_SHARP")!,
      NOTES_EVOLV.get("A")!,
      NOTES_EVOLV.get("B")!,
      NOTES_EVOLV.get("C_SHARP")!,
      NOTES_EVOLV.get("D_SHARP")!
    ],
  }],
  ["D_FLAT_MAJOR", {
    name: "Ré bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("B_FLAT")!,
      NOTES_EVOLV.get("E_FLAT")!,
      NOTES_EVOLV.get("A_FLAT")!,
      NOTES_EVOLV.get("D_FLAT")!
    ],
    notes: [
      NOTES_EVOLV.get("D_FLAT")!,
      NOTES_EVOLV.get("E_FLAT")!,
      NOTES_EVOLV.get("F")!,
      NOTES_EVOLV.get("G_FLAT")!,
      NOTES_EVOLV.get("A_FLAT")!,
      NOTES_EVOLV.get("B_FLAT")!,
      NOTES_EVOLV.get("C")!
    ],
  }],
  ["B_MAJOR", {
    name: "Si Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("F_SHARP")!,
      NOTES_EVOLV.get("C_SHARP")!,
      NOTES_EVOLV.get("G_SHARP")!,
      NOTES_EVOLV.get("D_SHARP")!,
      NOTES_EVOLV.get("A_SHARP")!
    ],
    notes: [
      NOTES_EVOLV.get("B")!,
      NOTES_EVOLV.get("C_SHARP")!,
      NOTES_EVOLV.get("D_SHARP")!,
      NOTES_EVOLV.get("E")!,
      NOTES_EVOLV.get("F_SHARP")!,
      NOTES_EVOLV.get("G_SHARP")!,
      NOTES_EVOLV.get("A_SHARP")!
    ],
  }],
  ["G_FLAT_MAJOR", {
    name: "Sol bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("B_FLAT")!,
      NOTES_EVOLV.get("E_FLAT")!,
      NOTES_EVOLV.get("A_FLAT")!,
      NOTES_EVOLV.get("D_FLAT")!,
      NOTES_EVOLV.get("G_FLAT")!
    ],
    notes: [
      NOTES_EVOLV.get("G_FLAT")!,
      NOTES_EVOLV.get("A_FLAT")!,
      NOTES_EVOLV.get("B_FLAT")!,
      NOTES_EVOLV.get("C")!,
      NOTES_EVOLV.get("D_FLAT")!,
      NOTES_EVOLV.get("E_FLAT")!,
      NOTES_EVOLV.get("F")!
    ],
  }],
  ["F_SHARP_MAJOR", {
    name: "Fa dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("F_SHARP")!,
      NOTES_EVOLV.get("C_SHARP")!,
      NOTES_EVOLV.get("G_SHARP")!,
      NOTES_EVOLV.get("D_SHARP")!,
      NOTES_EVOLV.get("A_SHARP")!,
      NOTES_EVOLV.get("E_SHARP")!
    ],
    notes: [
      NOTES_EVOLV.get("F_SHARP")!,
      NOTES_EVOLV.get("G_SHARP")!,
      NOTES_EVOLV.get("A_SHARP")!,
      NOTES_EVOLV.get("B")!,
      NOTES_EVOLV.get("C_SHARP")!,
      NOTES_EVOLV.get("D_SHARP")!,
      NOTES_EVOLV.get("E_SHARP")!
    ],
  }],
  ["C_FLAT_MAJOR", {
    name: "Do bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("B_FLAT")!,
      NOTES_EVOLV.get("E_FLAT")!,
      NOTES_EVOLV.get("A_FLAT")!,
      NOTES_EVOLV.get("D_FLAT")!,
      NOTES_EVOLV.get("G_FLAT")!,
      NOTES_EVOLV.get("C_FLAT")!
    ],
    notes: [
      NOTES_EVOLV.get("C_FLAT")!,
      NOTES_EVOLV.get("D_FLAT")!,
      NOTES_EVOLV.get("E_FLAT")!,
      NOTES_EVOLV.get("F_FLAT")!,
      NOTES_EVOLV.get("G_FLAT")!,
      NOTES_EVOLV.get("A_FLAT")!,
      NOTES_EVOLV.get("B_FLAT")!
    ],
  }],
  ["C_SHARP_MAJOR", {
    name: "Do dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [
      NOTES_EVOLV.get("F_SHARP")!,
      NOTES_EVOLV.get("C_SHARP")!,
      NOTES_EVOLV.get("G_SHARP")!,
      NOTES_EVOLV.get("D_SHARP")!,
      NOTES_EVOLV.get("A_SHARP")!,
      NOTES_EVOLV.get("E_SHARP")!,
      NOTES_EVOLV.get("B_SHARP")!
    ],
    notes: [
      NOTES_EVOLV.get("C_SHARP")!,
      NOTES_EVOLV.get("D_SHARP")!,
      NOTES_EVOLV.get("E_SHARP")!,
      NOTES_EVOLV.get("F_SHARP")!,
      NOTES_EVOLV.get("G_SHARP")!,
      NOTES_EVOLV.get("A_SHARP")!,
      NOTES_EVOLV.get("B_SHARP")!
    ],
  }],
  ["F_FLAT_MAJOR", {
    name: "Fa bémol Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES_EVOLV.get("F_FLAT")!,
      NOTES_EVOLV.get("G_FLAT")!,
      NOTES_EVOLV.get("A_FLAT")!,
      NOTES_EVOLV.get("B_DOUBLE_FLAT")!,
      NOTES_EVOLV.get("C_FLAT")!,
      NOTES_EVOLV.get("D_FLAT")!,
      NOTES_EVOLV.get("E_FLAT")!
    ],
  }],
  ["A_SHARP_MAJOR", {
    name: "La dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES_EVOLV.get("A_SHARP")!,
      NOTES_EVOLV.get("B_SHARP")!,
      NOTES_EVOLV.get("C_DOUBLE_SHARP")!,
      NOTES_EVOLV.get("D_SHARP")!,
      NOTES_EVOLV.get("E_SHARP")!,
      NOTES_EVOLV.get("F_DOUBLE_SHARP")!,
      NOTES_EVOLV.get("G_DOUBLE_SHARP")!
    ],
  }],
  ["E_SHARP_MAJOR", {
    name: "Mi dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES_EVOLV.get("E_SHARP")!,
      NOTES_EVOLV.get("F_DOUBLE_SHARP")!,
      NOTES_EVOLV.get("G_DOUBLE_SHARP")!,
      NOTES_EVOLV.get("A_SHARP")!,
      NOTES_EVOLV.get("B_SHARP")!,
      NOTES_EVOLV.get("C_DOUBLE_SHARP")!,
      NOTES_EVOLV.get("D_DOUBLE_SHARP")!
    ],
  }],
  ["D_SHARP_MAJOR", {
    name: "Ré dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES_EVOLV.get("D_SHARP")!,
      NOTES_EVOLV.get("E_SHARP")!,
      NOTES_EVOLV.get("F_DOUBLE_SHARP")!,
      NOTES_EVOLV.get("G_SHARP")!,
      NOTES_EVOLV.get("A_SHARP")!,
      NOTES_EVOLV.get("B_SHARP")!,
      NOTES_EVOLV.get("C_DOUBLE_SHARP")!
    ],
  }],
  ["B_SHARP_MAJOR", {
    name: "Si dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES_EVOLV.get("B_SHARP")!,
      NOTES_EVOLV.get("C_DOUBLE_SHARP")!,
      NOTES_EVOLV.get("D_DOUBLE_SHARP")!,
      NOTES_EVOLV.get("E_SHARP")!,
      NOTES_EVOLV.get("F_DOUBLE_SHARP")!,
      NOTES_EVOLV.get("G_DOUBLE_SHARP")!,
      NOTES_EVOLV.get("A_DOUBLE_SHARP")!
    ],
  }],
  ["G_SHARP_MAJOR", {
    name: "Sol dièse Majeur",
    type: SCALE_TYPE.MAJOR,
    key_signature: [],
    notes: [
      NOTES_EVOLV.get("G_SHARP")!,
      NOTES_EVOLV.get("A_SHARP")!,
      NOTES_EVOLV.get("B_SHARP")!,
      NOTES_EVOLV.get("C_SHARP")!,
      NOTES_EVOLV.get("D_SHARP")!,
      NOTES_EVOLV.get("E_SHARP")!,
      NOTES_EVOLV.get("F_DOUBLE_SHARP")!
    ],
  }],
]);

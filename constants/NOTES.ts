import { Note, ACCIDENTAL, NOTE_ID } from "@/models/note";



export const NOTES : Record<NOTE_ID, Note> = {
  [NOTE_ID.C]: {              id: NOTE_ID.C,              accidental: ACCIDENTAL.NONE,         enharmonics: [NOTE_ID.C_NATURAL, NOTE_ID.D_DOUBLE_FLAT, NOTE_ID.B_SHARP],        name: "Do"  },
  [NOTE_ID.C_SHARP]: {        id: NOTE_ID.C_SHARP,        accidental: ACCIDENTAL.SHARP,        enharmonics: [NOTE_ID.B_DOUBLE_SHARP, NOTE_ID.D_FLAT],                           name: "Do#" },
  [NOTE_ID.C_DOUBLE_SHARP]: { id: NOTE_ID.C_DOUBLE_SHARP, accidental: ACCIDENTAL.DOUBLE_SHARP, enharmonics: [NOTE_ID.D, NOTE_ID.E_DOUBLE_FLAT],                                 name: "Do𝄪" },
  [NOTE_ID.C_FLAT]: {         id: NOTE_ID.C_FLAT,         accidental: ACCIDENTAL.FLAT,         enharmonics: [NOTE_ID.B, NOTE_ID.A_DOUBLE_SHARP],                                name: "Do♭" },
  [NOTE_ID.C_DOUBLE_FLAT]: {  id: NOTE_ID.C_DOUBLE_FLAT,  accidental: ACCIDENTAL.DOUBLE_FLAT,  enharmonics: [NOTE_ID.B_FLAT, NOTE_ID.A_SHARP],                                  name: "Do𝄫" },
  [NOTE_ID.C_NATURAL]: {      id: NOTE_ID.C_NATURAL,      accidental: ACCIDENTAL.NATURAL,      enharmonics: [NOTE_ID.C, NOTE_ID.D_DOUBLE_FLAT, NOTE_ID.B_SHARP],                name: "Do♮" },

  [NOTE_ID.D]: {              id: NOTE_ID.D,              accidental: ACCIDENTAL.NONE,         enharmonics: [NOTE_ID.D_NATURAL, NOTE_ID.C_DOUBLE_SHARP, NOTE_ID.E_DOUBLE_FLAT], name: "Ré" },
  [NOTE_ID.D_SHARP]: {        id: NOTE_ID.D_SHARP,        accidental: ACCIDENTAL.SHARP,        enharmonics: [NOTE_ID.E_FLAT, NOTE_ID.F_DOUBLE_FLAT],                            name: "Ré#" },
  [NOTE_ID.D_DOUBLE_SHARP]: { id: NOTE_ID.D_DOUBLE_SHARP, accidental: ACCIDENTAL.DOUBLE_SHARP, enharmonics: [NOTE_ID.E, NOTE_ID.F_FLAT],                                        name: "Ré𝄪" },
  [NOTE_ID.D_FLAT]: {         id: NOTE_ID.D_FLAT,         accidental: ACCIDENTAL.FLAT,         enharmonics: [NOTE_ID.C_SHARP, NOTE_ID.B_DOUBLE_SHARP],                          name: "Ré♭" },
  [NOTE_ID.D_DOUBLE_FLAT]: {  id: NOTE_ID.D_DOUBLE_FLAT,  accidental: ACCIDENTAL.DOUBLE_FLAT,  enharmonics: [NOTE_ID.C, NOTE_ID.B_SHARP],                                       name: "Ré𝄫" },
  [NOTE_ID.D_NATURAL]: {      id: NOTE_ID.D_NATURAL,      accidental: ACCIDENTAL.NATURAL,      enharmonics: [NOTE_ID.D, NOTE_ID.C_DOUBLE_SHARP, NOTE_ID.E_DOUBLE_FLAT],         name: "Ré♮" },

  [NOTE_ID.E]: {              id: NOTE_ID.E,              accidental: ACCIDENTAL.NONE,         enharmonics: [NOTE_ID.E_NATURAL, NOTE_ID.D_DOUBLE_SHARP, NOTE_ID.F_FLAT ],       name: "Mi" },
  [NOTE_ID.E_SHARP]: {        id: NOTE_ID.E_SHARP,        accidental: ACCIDENTAL.SHARP,        enharmonics: [NOTE_ID.E_SHARP, NOTE_ID.G_DOUBLE_FLAT],                           name: "Mi#" },
  [NOTE_ID.E_DOUBLE_SHARP]: { id: NOTE_ID.E_DOUBLE_SHARP, accidental: ACCIDENTAL.DOUBLE_SHARP, enharmonics: [NOTE_ID.F_SHARP, NOTE_ID.G_FLAT],                                  name: "Mi𝄪" },
  [NOTE_ID.E_FLAT]: {         id: NOTE_ID.E_FLAT,         accidental: ACCIDENTAL.FLAT,         enharmonics: [NOTE_ID.D_SHARP, NOTE_ID.F_DOUBLE_FLAT],                           name: "Mi♭" },
  [NOTE_ID.E_DOUBLE_FLAT]: {  id: NOTE_ID.E_DOUBLE_FLAT,  accidental: ACCIDENTAL.DOUBLE_FLAT,  enharmonics: [NOTE_ID.D, NOTE_ID.C_DOUBLE_SHARP],                                name: "Mi𝄫" },
  [NOTE_ID.E_NATURAL]: {      id: NOTE_ID.E_NATURAL,      accidental: ACCIDENTAL.NATURAL,      enharmonics: [NOTE_ID.E, NOTE_ID.D_DOUBLE_SHARP, NOTE_ID.F_FLAT],                name: "Mi♮" },

  [NOTE_ID.F]: {              id: NOTE_ID.F,              accidental: ACCIDENTAL.NONE,         enharmonics: [NOTE_ID.F_NATURAL, NOTE_ID.E_SHARP, NOTE_ID.G_DOUBLE_FLAT],        name: "Fa" },
  [NOTE_ID.F_SHARP]: {        id: NOTE_ID.F_SHARP,        accidental: ACCIDENTAL.SHARP,        enharmonics: [NOTE_ID.E_DOUBLE_SHARP, NOTE_ID.G_FLAT],                           name: "Fa#" },
  [NOTE_ID.F_DOUBLE_SHARP]: { id: NOTE_ID.F_DOUBLE_SHARP, accidental: ACCIDENTAL.DOUBLE_SHARP, enharmonics: [NOTE_ID.G, NOTE_ID.A_DOUBLE_FLAT],                                 name: "Fa𝄪" },
  [NOTE_ID.F_FLAT]: {         id: NOTE_ID.F_FLAT,         accidental: ACCIDENTAL.FLAT,         enharmonics: [NOTE_ID.E, NOTE_ID.D_DOUBLE_SHARP],                                name: "Fa♭" },
  [NOTE_ID.F_DOUBLE_FLAT]: {  id: NOTE_ID.F_DOUBLE_FLAT,  accidental: ACCIDENTAL.DOUBLE_FLAT,  enharmonics: [NOTE_ID.E_FLAT, NOTE_ID.D_SHARP],                                  name: "Fa𝄫" },
  [NOTE_ID.F_NATURAL]: {      id: NOTE_ID.F_NATURAL,      accidental: ACCIDENTAL.NATURAL,      enharmonics: [NOTE_ID.F, NOTE_ID.E_SHARP, NOTE_ID.G_DOUBLE_FLAT],                name: "Fa♮" },

  [NOTE_ID.G]: {              id: NOTE_ID.G,              accidental: ACCIDENTAL.NONE,         enharmonics: [NOTE_ID.G_NATURAL, NOTE_ID.F_DOUBLE_SHARP, NOTE_ID.A_DOUBLE_FLAT], name: "Sol" },
  [NOTE_ID.G_SHARP]: {        id: NOTE_ID.G_SHARP,        accidental: ACCIDENTAL.SHARP,        enharmonics: [NOTE_ID.A_FLAT],                                                   name: "Sol#" },
  [NOTE_ID.G_DOUBLE_SHARP]: { id: NOTE_ID.G_DOUBLE_SHARP, accidental: ACCIDENTAL.DOUBLE_SHARP, enharmonics: [NOTE_ID.A, NOTE_ID.B_DOUBLE_FLAT],                                 name: "Sol𝄪" },
  [NOTE_ID.G_FLAT]: {         id: NOTE_ID.G_FLAT,         accidental: ACCIDENTAL.FLAT,         enharmonics: [NOTE_ID.E_DOUBLE_SHARP, NOTE_ID.F_SHARP],                          name: "Sol♭" },
  [NOTE_ID.G_DOUBLE_FLAT]: {  id: NOTE_ID.G_DOUBLE_FLAT,  accidental: ACCIDENTAL.DOUBLE_FLAT,  enharmonics: [NOTE_ID.E_SHARP, NOTE_ID.F],                                       name: "Sol𝄫" },
  [NOTE_ID.G_NATURAL]: {      id: NOTE_ID.G_NATURAL,      accidental: ACCIDENTAL.NATURAL,      enharmonics: [NOTE_ID.G, NOTE_ID.F_DOUBLE_SHARP, NOTE_ID.A_DOUBLE_FLAT],         name: "Sol♮" },

  [NOTE_ID.A]: {              id: NOTE_ID.A,              accidental: ACCIDENTAL.NONE,         enharmonics: [NOTE_ID.A_NATURAL, NOTE_ID.G_DOUBLE_SHARP, NOTE_ID.B_DOUBLE_FLAT], name: "La" },
  [NOTE_ID.A_SHARP]: {        id: NOTE_ID.A_SHARP,        accidental: ACCIDENTAL.SHARP,        enharmonics: [NOTE_ID.B_FLAT, NOTE_ID.C_DOUBLE_FLAT],                            name: "La#" },
  [NOTE_ID.A_DOUBLE_SHARP]: { id: NOTE_ID.A_DOUBLE_SHARP, accidental: ACCIDENTAL.DOUBLE_SHARP, enharmonics: [NOTE_ID.B, NOTE_ID.C_FLAT],                                        name: "La𝄪" },
  [NOTE_ID.A_FLAT]: {         id: NOTE_ID.A_FLAT,         accidental: ACCIDENTAL.FLAT,         enharmonics: [NOTE_ID.G_SHARP],                                                  name: "La♭" },
  [NOTE_ID.A_DOUBLE_FLAT]: {  id: NOTE_ID.A_DOUBLE_FLAT,  accidental: ACCIDENTAL.DOUBLE_FLAT,  enharmonics: [NOTE_ID.G, NOTE_ID.F_DOUBLE_SHARP],                                name: "La𝄫" },
  [NOTE_ID.A_NATURAL]: {      id: NOTE_ID.A_NATURAL,      accidental: ACCIDENTAL.NATURAL,      enharmonics: [NOTE_ID.A, NOTE_ID.G_DOUBLE_SHARP, NOTE_ID.B_DOUBLE_FLAT],         name: "La♮" },

  [NOTE_ID.B]: {              id: NOTE_ID.B,              accidental: ACCIDENTAL.NONE,         enharmonics: [NOTE_ID.B_NATURAL, NOTE_ID.A_DOUBLE_SHARP, NOTE_ID.C_FLAT],        name: "Si" },
  [NOTE_ID.B_SHARP]: {        id: NOTE_ID.B_SHARP,        accidental: ACCIDENTAL.SHARP,        enharmonics: [NOTE_ID.D_DOUBLE_FLAT, NOTE_ID.C],                                 name: "Si#" },
  [NOTE_ID.B_DOUBLE_SHARP]: { id: NOTE_ID.B_DOUBLE_SHARP, accidental: ACCIDENTAL.DOUBLE_SHARP, enharmonics: [NOTE_ID.D_FLAT, NOTE_ID.C_SHARP],                                  name: "Si𝄪" },
  [NOTE_ID.B_FLAT]: {         id: NOTE_ID.B_FLAT,         accidental: ACCIDENTAL.FLAT,         enharmonics: [NOTE_ID.A_SHARP, NOTE_ID.C_DOUBLE_FLAT],                           name: "Si♭" },
  [NOTE_ID.B_DOUBLE_FLAT]: {  id: NOTE_ID.B_DOUBLE_FLAT,  accidental: ACCIDENTAL.DOUBLE_FLAT,  enharmonics: [NOTE_ID.G_DOUBLE_SHARP, NOTE_ID.A],                                name: "Si𝄫" },
  [NOTE_ID.B_NATURAL]: {      id: NOTE_ID.B_NATURAL,      accidental: ACCIDENTAL.NATURAL,      enharmonics: [NOTE_ID.B, NOTE_ID.A_DOUBLE_SHARP, NOTE_ID.C_FLAT],                name: "Si♮" },
};

import { NOTES } from "@/constants/NOTES";
import type { Note } from "@/models/note";

export function getRandomNote(): Note {
  const keys = Array.from(NOTES.keys());
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return NOTES.get(randomKey)!;
}
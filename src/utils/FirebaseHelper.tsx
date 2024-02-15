import { ref, set } from "firebase/database";
import { db } from "../firebaseConfig";

export const addAttempt = async (name: string, time: number) => {
  const gameRef = ref(db, `items/30`);
  return await set(gameRef, {
    name: name,
    time: time,
  });
};

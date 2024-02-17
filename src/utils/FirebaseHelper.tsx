import { ref, set } from "firebase/database";
import { db } from "../firebaseConfig";
import { generateGUID } from "./BdayChallengeHelper";

export const addAttempt = async (name: string, time: number) => {
  const id = generateGUID();
  const gameRef = ref(db, `items/${id}`);
  return await set(gameRef, {
    name: name,
    time: time,
  });
};

import { get, ref, set } from "firebase/database";
import { db } from "../firebaseConfig";
import { generateGUID } from "./BdayChallengeHelper";
import { LeaderboardItem } from "./TableUtils";

export const addAttempt = async (name: string, time: number) => {
  const id = generateGUID();
  const gameRef = ref(db, `items/${id}`);
  return await set(gameRef, {
    name: name,
    time: time,
  });
};

export const getLeaderboardItems = async (sortItems: boolean = true) => {
  const dataRef = ref(db, "items");
  const firebaseData = await get(dataRef);
  let convertedData: LeaderboardItem[] = Object.values(firebaseData.val());
  if (sortItems) convertedData = convertedData.sort((a, b) => a.time - b.time);
  return convertedData;
};

export const getLeaderboardItem = async (id: string) => {
  const dataRef = ref(db, `items/${id}`);
  const firebaseData = await get(dataRef);
  return firebaseData.val();
};

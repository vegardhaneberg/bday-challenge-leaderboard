import { get, ref, set } from "firebase/database";
import { db } from "../firebaseConfig";
import { generateGUID, getCurrentDateAsString } from "./BdayChallengeHelper";
import { Attempt, Player, Stat } from "./TableUtils";

export const addAttemptForNewPlayer = async (
  name: string,
  time: number,
  birthday: string
) => {
  const id = generateGUID();
  const playerRef = ref(db, `players/${id}`);

  const attempts: Attempt[] = [
    {
      date: getCurrentDateAsString(),
      time: time,
    },
  ];
  const stats: Stat[] = [
    {
      name: "Bong",
      value: 3,
    },
    {
      name: "Breezer",
      value: 3,
    },
    {
      name: "Shot",
      value: 3,
    },
  ];
  const newPlayer: Player = {
    id: id,
    name: name,
    attempts: attempts,
    birthday: birthday,
    time: time,
    stats: stats,
  };
  return await set(playerRef, newPlayer);
};

export const getPlayers = async (
  sortItems: boolean = true
): Promise<Player[]> => {
  const dataRef = ref(db, "players");
  const firebaseData = await get(dataRef);
  let players: Player[] = Object.values(firebaseData.val());

  if (sortItems) players = players.sort((a, b) => a.time - b.time);
  return players;
};

export const getPlayerByName = async (playerName: string) => {
  const players = await getPlayers(false);
  return players.find((player) => player.name === playerName);
};

export const getPlayer = async (id: string) => {
  const dataRef = ref(db, `players/${id}`);
  const firebaseData = await get(dataRef);
  return firebaseData.val();
};

export const addAttemptForExistingPlayer = async (player: Player) => {
  const playerRef = ref(db, `players/${player.id}`);
  return await set(playerRef, player);
};

export const updateStatsForPlayer = async (player: Player, stats: Stat[]) => {
  const playerRef = ref(db, `players/${player.id}`);
  player.stats = stats;
  return await set(playerRef, player);
};

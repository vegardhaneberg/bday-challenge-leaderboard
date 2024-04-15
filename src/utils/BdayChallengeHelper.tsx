import { Attempt, Player, LeaderboardItem } from "./TableUtils";

export const onlyContainsNumbers = (str: string) => !isNaN(parseFloat(str));

export function generateGUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0; // Generate a random integer between 0 and 15.
    const v = c === "x" ? r : (r & 0x3) | 0x8; // For 'x' use the random number, for 'y' ensure it's 8, 9, A, or B.
    return v.toString(16); // Convert the number to its hexadecimal representation.
  });
}

export function getCurrentDateAsString(): string {
  const currentDate = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${currentDate.getDate()}. ${
    monthNames[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`;
}

export function getBestAttempt(attempts: Attempt[]): Attempt | undefined {
  const bestTime = attempts.reduce(
    (min, p) => (p.time < min ? p.time : min),
    attempts[0].time
  );
  return attempts.find((a) => a.time === bestTime);
}

export const convertPlayersToLeaderboardItems = (
  players: Player[],
  sortItems: boolean = true
) => {
  let leaderboardItems: LeaderboardItem[] = [];
  players.forEach((player) => {
    const bestAttempt = getBestAttempt(player.attempts)!;
    leaderboardItems.push({
      birthday: player.birthday,
      bestTime: bestAttempt.time,
      id: player.id,
      name: player.name,
    });
  });
  if (sortItems)
    leaderboardItems = leaderboardItems.sort((a, b) => a.bestTime - b.bestTime);
  return leaderboardItems;
};

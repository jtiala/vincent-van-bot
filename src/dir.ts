import { DiagonalDir, Dir } from "./types/Dirs";

export const dirs: Dir[] = ["RIGHT", "DOWN", "LEFT", "UP"];
export const diagonalDirs: DiagonalDir[] = [
  "RIGHT_DOWN",
  "RIGHT_UP",
  "LEFT_DOWN",
  "LEFT_UP",
];

export const isDir = (maybeDir: string): maybeDir is Dir =>
  dirs.includes(maybeDir as Dir);

export const isDiagonalDir = (
  maybeDiagonalDir: string
): maybeDiagonalDir is DiagonalDir =>
  diagonalDirs.includes(maybeDiagonalDir as DiagonalDir);

export const diagonalDirToDirs = (diagonalDir: DiagonalDir): Dir[] => {
  return diagonalDir === "RIGHT_DOWN"
    ? ["RIGHT", "DOWN"]
    : diagonalDir === "RIGHT_UP"
    ? ["RIGHT", "UP"]
    : diagonalDir === "LEFT_DOWN"
    ? ["LEFT", "DOWN"]
    : ["LEFT", "UP"];
};

export const diagonalDirsToDirs = (diagonalDirs: DiagonalDir[]) => {
  return diagonalDirs.reduce<Dir[]>(
    (acc, curr) => [...acc, ...diagonalDirToDirs(curr)],
    []
  );
};

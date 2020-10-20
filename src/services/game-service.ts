export type BoardLine = number[];
export type Board = BoardLine[];

/**
 * board represents the board of the game, the number is the mapping to the corresponding color
 */
export interface GameDefinition {
  nbColor: number;
  board: Board;
}

/**
 * Represents the masks use to process user click
 * Can only have impair length and height
 * default is:
 *  X
 * XXX
 *  X
 */
export interface ChangePolicy {
  mask: boolean[][];
}

const defaultPolicy = {
  mask: [
    [false, true, false],
    [true, true, true],
    [false, true, false],
  ],
};

export const getPolicyHeight = (policy: ChangePolicy): number => (policy.mask.length - 1) / 2;
export const getPolicyLength = (policy: ChangePolicy): number => policy.mask.length && (policy.mask[0].length - 1) / 2;

export const getGameHeight = (game: GameDefinition): number => game.board.length;
export const getGameLength = (game: GameDefinition): number => game.board.length && game.board[0].length;

export const increment = (nbColor: number) => (value: number): number => (value + 1) % nbColor;

export const isGameWon = (game: GameDefinition): boolean => {
  const firstValue = game.board[0][0];
  return game.board.every((boardLine: BoardLine): boolean =>
    boardLine.every((value: number): boolean => value === firstValue),
  );
};

export const isAffectedByPolicy = (policy: ChangePolicy) => (xClick: number, yClick: number) => (
  x: number,
  y: number,
): boolean => {
  const policyHeight = getPolicyHeight(policy);
  const policyLength = getPolicyLength(policy);
  return (
    y >= yClick - policyHeight &&
    y <= yClick + policyHeight &&
    x >= xClick - policyLength &&
    x <= xClick + policyLength &&
    policy.mask[yClick - y + policyHeight][xClick - x + policyLength]
  );
};

export const isAffectedByDefaultPolicy = isAffectedByPolicy(defaultPolicy);

export const processClick = (policy: ChangePolicy) => (game: GameDefinition, x: number, y: number): GameDefinition => {
  const gameHeight = getGameHeight(game);
  const gameLength = getGameLength(game);

  const gameIncrement = increment(game.nbColor);
  const shouldUpdateValue = isAffectedByPolicy(policy);

  // verify that x and y are in bounds
  if (0 > x || x >= gameLength || 0 > y || y >= gameHeight) {
    return game;
  }

  const newBoard = game.board.map(
    (line: BoardLine, YIndex: number): BoardLine => {
      return line.map((value: number, XIndex: number): number => {
        if (shouldUpdateValue(x, y)(XIndex, YIndex)) {
          return gameIncrement(value);
        }
        return value;
      });
    },
  );
  return { ...game, board: newBoard };
};

export const defaultProcessClick = processClick(defaultPolicy);

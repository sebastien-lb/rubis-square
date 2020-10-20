import { CLICK } from './game.constants';

interface ClickAction {
  type: typeof CLICK;
  payload: {
    x: number;
    y: number;
  };
}

export const click = (x: number, y: number): ClickAction => ({
  type: CLICK as typeof CLICK,
  payload: { x, y },
});

export type GameActions = ReturnType<typeof click>;

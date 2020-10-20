import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import purple from '@material-ui/core/colors/purple';

import { GameDefinition } from '../services/game-service';

export type CustomTheme = Theme & CustomProps;

export const getGridDisplay = (game: GameDefinition): string =>
  (game.board || []).reduce((acc: string): string => `${acc} 1fr`, '');

interface CustomProps {
  custom: {
    size: {
      tile: number;
    };
    tileColors: Array<string>;
  };
}

export const theme: CustomTheme = {
  ...createMuiTheme({
    palette: {
      //   primary: lol,
    },
  }),
  custom: {
    size: {
      tile: 50,
    },
    tileColors: [red[300], blue[300], green[300], purple[300], amber[300]],
  },
};

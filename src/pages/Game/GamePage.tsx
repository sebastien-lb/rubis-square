import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Style } from 'jss';
import { CSSProperties } from '@material-ui/styles';

import { CustomTheme } from '../../style/theme';
import { GameComponent } from '../../components';

type ClassNames = 'container' | 'gameContainer';
interface OwnProps {
  classes: Record<ClassNames, string>;
}

type Props = OwnProps;

export const GamePage: React.FC<Props> = (props: Props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <span>Romain's Square</span>
      <div className={classes.gameContainer}>
        <GameComponent />
      </div>
    </div>
  );
};

const styles: Style = (theme: CustomTheme): Record<ClassNames, CSSProperties> => ({
  container: {},
  gameContainer: {
    paddingTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
});

export default withStyles(styles)(GamePage);

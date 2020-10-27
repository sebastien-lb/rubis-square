import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Style } from 'jss';
import { CSSProperties } from '@material-ui/styles';

import { CustomTheme } from '../../style/theme';
import { GameComponent } from '../../components';

type ClassNames = 'container' | 'gameContainer' | "button";
interface OwnProps {
  classes: Record<ClassNames, string>;
}

type Props = OwnProps;

const generateRandomSizeMultiplier = () : number => {
  return Math.random() * 0.4 + 0.7;
}

export const GamePage: React.FC<Props> = (props: Props) => {
  const { classes } = props;
  const [sizeMultiplier, setSizeMultiplier] = useState(generateRandomSizeMultiplier());
  return (
    <div className={classes.container}>
      <span>Rubis Square</span>
      <div className={classes.gameContainer}>
        <GameComponent sizeMultiplier={sizeMultiplier} />
      </div>
      <button className={classes.button} onClick={() => setSizeMultiplier(generateRandomSizeMultiplier())}>Randomize!</button>
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
  button: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
    borderWidth: 0,
    borderRadius: "5px",
    boxShadow: "1px 1px 3px grey"
  }
});

export default withStyles(styles)(GamePage);

import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Style } from 'jss';
import { CSSProperties } from '@material-ui/styles';

import { CustomTheme } from '../../style/theme';

import anime from 'animejs';

type ClassNames = 'container';
interface OwnProps {
  classes: Record<ClassNames, string>;
  sizeMultiplier: number;
  onClick: () => void;
  value: number;
}

type Props = OwnProps;

const getSpecificClassName = (generatedClassName: string) => `.${generatedClassName.split(' ')[1]}`;

export const Tile: React.FC<Props> = (props: Props) => {
  const { classes, onClick, value } = props;

  useEffect(() => {
    anime({
      targets: getSpecificClassName(classes.container),
      scale: [1.2, 1],
      duration: 1000,
      easing: 'easeOutCubic',
    });
  }, [value, classes]);
  return <div className={classes.container} onClick={onClick}></div>;
};

const styles: Style = (theme: CustomTheme): Record<ClassNames, ((p: Props) => CSSProperties) | CSSProperties> => ({
  container: (props: Props) => ({
    height: theme.custom.size.tile * props.sizeMultiplier,
    width: theme.custom.size.tile * props.sizeMultiplier,
    background: theme.custom.tileColors[props.value],
    borderRadius: '50%',
    justifySelf: 'center',
    alignSelf: 'center',
  }),
});

export default withStyles(styles)(Tile);

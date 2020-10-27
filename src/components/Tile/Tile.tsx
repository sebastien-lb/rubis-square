import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Style } from 'jss';
import { CSSProperties, useTheme } from '@material-ui/styles';

import { CustomTheme } from '../../style/theme';

import anime from 'animejs';

type ClassNames = 'container' | 'pentagon';
interface OwnProps {
  classes: Record<ClassNames, string>;
  sizeMultiplier: number;
  onClick: () => void;
  value: number;
}

type Props = OwnProps;

const getSpecificClassName = (generatedClassName: string) => `.${generatedClassName.split(' ')[1]}`;

const randomRotation = ():number => {
  return Math.random()*360;
}

export const Tile: React.FC<Props> = (props: Props) => {
  const { classes, sizeMultiplier, onClick, value } = props;
  const theme: CustomTheme = useTheme();
  const rotation = randomRotation();

  useEffect(() => {
    anime({
      targets: getSpecificClassName(classes.container),
      scale: sizeMultiplier,
      rotate: `${rotation}deg`,
      duration: 1000,
      easing: 'easeOutCubic',
    });
  }, [value, classes, rotation, sizeMultiplier]);
  return <div className={classes.container} onClick={onClick}>
    	      <svg className={classes.pentagon} fill={theme.custom.tileColors[value]}  viewBox="0 0 600 600" 
preserveAspectRatio="xMinYMin meet">
              <polygon points="294,3 585.246118,214.602691 474,556.983037 114,556.983037 2.753882,214.602691" stroke="#aaa" stroke-width="1"/>
            </svg>	
  </div>;
};

const styles: Style = (theme: CustomTheme): Record<ClassNames, ((p: Props) => CSSProperties) | CSSProperties> => ({
  container: (props: Props) => ({
    height: theme.custom.size.tile,
    width: theme.custom.size.tile,
    justifySelf: 'center',
    alignSelf: 'center',
    display: "flex",
  }),
  pentagon: {
    height: "100%",
    width: "100%",
    justifySelf: 'center',
    alignSelf: 'center',
  },
});

export default withStyles(styles)(Tile);

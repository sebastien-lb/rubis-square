import { connect } from 'react-redux';
import { default as GameComponent, StateProps, DispatchProps } from './Game';

import { State } from '../../redux/state';
import { getGame } from '../../redux/Game/game.selectors';
import { click } from '../../redux/Game/game.actions';
import { Action, Dispatch } from 'redux';

const mapStateToProps = (state: State): StateProps => ({
  game: getGame(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  click: (x: number, y: number): Action => dispatch(click(x, y)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);

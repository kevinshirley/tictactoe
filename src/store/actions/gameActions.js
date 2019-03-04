import { SET_PLAYERS } from './index';

export const setPlayers = (players, history) => dispatch => {
  dispatch({
    type: SET_PLAYERS,
    payload: players
  });
  history.push('/game');
}
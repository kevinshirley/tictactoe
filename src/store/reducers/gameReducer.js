import { SET_PLAYERS } from '../actions';

const initialState = {
  players: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYERS: 
      return {
        ...state,
        players: action.payload
      }
    default: 
      return state;
  }
}

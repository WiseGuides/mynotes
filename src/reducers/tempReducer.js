const INITIAL_STATE = { name: '' };

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'temp':
      return { ...state };
    default:
      return state;
  }
}
import { connect } from 'react-redux';

const WithStore = ( { children, store, dispatch }) => children(store, dispatch);

export default connect( 
  store => ( { store } ),
  dispatch => ( { dispatch })
)( WithStore );
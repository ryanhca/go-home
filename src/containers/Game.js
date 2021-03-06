import { connect } from 'react-redux';

import App from '../App';

const mapStateToProps = state => {
  return {
    something: state.something
  };
};

const Game = connect(mapStateToProps)(App);

export default Game;

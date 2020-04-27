import { connect } from 'react-redux';
import * as actions from '../actions/Facilities';
import Facilities from '../components/Facilities';

const mapStateToProps = state => {
  return {
    facilities: state.facilities,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (facilities) => dispatch(actions.addTodo(facilities)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Facilities)
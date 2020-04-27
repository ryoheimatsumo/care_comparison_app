import React from 'react';
import * as actions from '../action/Facilities';
import {connect} from 'react-redux';


class FacilityInfo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        allFacilities:this.props.state.facilities,
    };
  }
  


  render() {
    const {params} = this.props.match
    const id = parseInt(params.id, 10)
    const facility = this.state.allFacilities.filter(e => e.id === id)[0]
    return (
      <>
      <div className='facility_block'>
          <div className="facility_detail">
              <table　border="1">
              <tr valign="top">
                <th>施設名</th>
                <td>{facility.name}</td>
                </tr>
                <tr valign="top">
                <th>所在地</th>
                <td>{facility.address}</td>
                </tr>
                <tr valign="top">
                <th>紹介文</th>
                <td>{facility.introduction}</td>
                </tr>
              </table>
           </div>
      </div>
      </>
    );
  }
}


const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (facilities) => dispatch(actions.addTodo(facilities)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FacilityInfo);

import React from 'react';
import './FacilityInfo.css'
import './Facililities'
import Facilities from './Facililities';
import { withRouter,Router } from 'react-router-dom';
import * as actions from '../action/Facilities';
import {connect} from 'react-redux';
import FacilitiesRouter from './FacilitiesRouter'


class FacilityInfo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      allFacilities:this.props.state.facilities,
      displayedFacilities:[],
      isAll:true,
      input:null,
      facility:null
    };
  }
  

  componentDidMount() {
    if(this.state.isAll) {
      this.setState({displayedFacilities:this.props.state.facilities})
    }
    
  }
  searchFacilities() {
    const data = this.state.allFacilities;
    const hitData = data.filter((f) => 
      f.name.toString().indexOf(this.state.input) >= 0 ||
      f.address.toString().indexOf(this.state.input) >= 0 ||
      f.introduction.toString().indexOf(this.state.input) >= 0
    );
    this.setState({
      displayedFacilities:hitData,
      isAll:false
    });
  }

  handleChange =
    (e) => {
      this.setState({ input: e.target.value });
      if(e.key === 'Enter') {
        this.searchFacilities()
      }
    }

  displayAll = () => {
    this.setState({
      isAll:true,
    displayedFacilities:this.state.allFacilities
  })
  }

  render() {

    return (
      <>
      <h1>施設一覧</h1>
          <input type="text" placeholder="search" onChange={this.handleChange} onKeyDown={this.handleChange} />
          <input type="button" value="検索" onClick={this.searchFacilities.bind(this)}/>
          <input type="button" value="全件" onClick={this.displayAll}/>
        <Facilities facilities={this.state.displayedFacilities} /> 
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



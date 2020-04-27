import React from 'react';
import { withRouter } from 'react-router-dom';

function FacilityDetail (props) {
  
    return (
        <h1>{this.props.facility}</h1>
    )
}

export default withRouter(FacilityDetail)
import React from 'react';
import { Link,withRouter } from 'react-router-dom';


function Facilities (props) {
  const facilities = props.facilities;
    return (
      facilities.map((facility) => {
        return (
          <div key={facility.id} className='facilities_info' >
            <div className="facility_name">
            {/* <Link to={{
              pathname:'detail',
              query: {
                facility: facility
              }
            }}>{facility.name}</Link> */}
            {facility.name}
            </div>
            <div className="facility_info">
              <table　border="1">
                <tr valign="top">
                <th>所在地</th>
                <td>{facility.address}</td>
                </tr>
              </table>
           </div>
          </div>
              )  
        })
    )
}

export default Facilities
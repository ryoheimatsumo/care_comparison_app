import React from 'react';
import FacilityInfo from './FacilityInfo';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import FacilityDetail from './FacilityDetail';


class Main extends React.Component {
  render() {

    return (
      <>
      <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={FacilityInfo} />
      <Route path="/facilityDetail/:id" component={FacilityDetail} />
      <Route component={() => <Redirect to="/" />} />
    </Switch>
    {/* <FacilityInfo /> */}
  </BrowserRouter>
 
    </>
    );
  }
}

export default Main;

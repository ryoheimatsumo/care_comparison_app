import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import FacilityDetail from './FacilityDetail';
import FacilityInfo from './FacilityInfo';

const Router = () => {
// eslint-disable-next-line no-unused-expressions
<BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={FacilityInfo} />
      <Route path="/facilityDetail" component={FacilityDetail} />
      <Route component={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>

}

export default Router;
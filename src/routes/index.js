import React, { Fragment } from 'react';
import { IndexRoute, Route } from 'react-router';
// COMPONENTS
import App from '../App'
import StudentsStatus from '../containers/students-status'

export default <Fragment>
    <Route path='/' component={App}>
        <IndexRoute component={StudentsStatus} />
    </Route>

    {/* <Route path='signin' component={Signin}/>
    <Route path='signout' component={Signout}/>
    <Route path='*' component={NotFound}/>
    <Route path='/notfound' component={NotFound}/> */}
</Fragment>
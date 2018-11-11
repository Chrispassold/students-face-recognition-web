import React, { Fragment } from 'react';
import { IndexRoute, Route } from 'react-router';
// COMPONENTS
import App from '../App'
import ClassRegister from '../containers/class-register'

export default <Fragment>
    <Route path='/' component={App}>
        <IndexRoute component={ClassRegister} />
    </Route>

    {/* <Route path='signin' component={Signin}/>
    <Route path='signout' component={Signout}/>
    <Route path='*' component={NotFound}/>
    <Route path='/notfound' component={NotFound}/> */}
</Fragment>
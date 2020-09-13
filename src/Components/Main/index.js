import React from 'react';
import Series from '../../containers/Series';
import {Switch, Route} from 'react-router-dom';
import SingleSeries from '../../containers/SingleSeries';

const Main = (props) => {
    return (
    <Switch>
        <Route exact path="/" component={Series} />
        <Route path="/series/:id" component={SingleSeries} />
    </Switch>
    );
    
}

export default Main;

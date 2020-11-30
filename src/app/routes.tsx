import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from '../pages/about'
import Home from '../pages/home'

//type RouteParams = {
//    id: string
//}

const Routes = () => {

return (
    <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route component={() => <Redirect to="/" />} />        
        {/* 
        {AppService.isAuth() ? <>
        
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route 
                exact path="/board/:id" 
                render={({ match }:RouteComponentProps<RouteParams> ) => 
                    <Board id={match.params.id} />}
            />
        
        </> : <Redirect to="/"/>}
            */}
    </Switch>
    )
}

export default Routes

import React, {lazy, Suspense} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

const About = lazy(() => import('../pages/about'));
const Home = lazy(() => import('../pages/home'));

//type RouteParams = {
//    id: string
//}

const Routes = () => {

return (
    <Switch>

        <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={Home}/>
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
        </Suspense>
    </Switch>

)
}

export default Routes

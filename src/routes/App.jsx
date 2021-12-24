import React from 'react';
import {Layout} from '../containers/Layout/Layout'
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom'
import { Home } from '../Pages/Home';
import { MostValued } from '../Pages/MostValued';
import { LeastValued } from '../Pages/LeastValued';
import { SearchPage } from '../Pages/SearchPage';
import AppContext from '../context/AppContext';
import { useinitialState} from '../Hooks/InitialState';
const App = () => {
    const globalState = useinitialState();

 
    return (
        <AppContext.Provider value={globalState}>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/home'  component={Home}/>
                    <Route exact path='/most'  component={MostValued}/>
                    <Route exact path='/least'  component={LeastValued}/>
                    <Route exact path='/search' component={SearchPage} />
                    <Redirect to='/home' />
                </Switch>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
        
     );
}

export default App;
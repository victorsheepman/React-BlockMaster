import React from 'react';
import {Layout} from '../containers/Layout'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { Home } from '../Pages/Home';
import { MostValued } from '../Pages/MostValued';
import { LeastValued } from '../Pages/LeastValued';
import { SearchPage } from '../Pages/SearchPage';
import AppContext from '../context/AppContext';
import { useSearch } from '../Hooks/useSearch';
const App = () => {
    const globalState = useSearch();
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
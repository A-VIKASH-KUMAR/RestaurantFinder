import React from 'react';
import Home from './routes/home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetail from './routes/RestaurantInDetail';
import { RestaurantsContextProvider } from './context/RestaurantsContext';
const App=()=>{
    return(
    <RestaurantsContextProvider>
       
            <div className="container">
        <Router>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/restaurants/:id/update" component={UpdatePage}/>
            <Route exact path="/restaurants/:id"component={RestaurantDetail}/>
            
            </Switch>
        </Router>
        </div>
    </RestaurantsContextProvider>
    )
};
export default App;

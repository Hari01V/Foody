import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';
import RestaurantView from './Components/RestaurantView';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/restaurants/:id" render={(routeProps) => <RestaurantView routeProps={routeProps} setTabValue={0} />} />
        <Route exact path="/restaurants/:id/order" render={(routeProps) => <RestaurantView routeProps={routeProps} setTabValue={1} />} />
        <Route exact path="/restaurants/:id/reviews" render={(routeProps) => <RestaurantView routeProps={routeProps} setTabValue={2} />} />
        <Route exact path="/restaurants/:id/menu" render={(routeProps) => <RestaurantView routeProps={routeProps} setTabValue={3} />} />
        <Route exact path="/restaurants/:id/photos" render={(routeProps) => <RestaurantView routeProps={routeProps} setTabValue={4} />} />
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';
import RestaurantView from './Components/RestaurantView';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/restaurants/:id" render={(routeProps) => <RestaurantView routeProps={routeProps} />} />
      </Switch>
    </div>
  );
}

export default App;

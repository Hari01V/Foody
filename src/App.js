import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        {/* <Route exact path="" render={() => }/> */}
      </Switch>
    </div>
  );
}

export default App;

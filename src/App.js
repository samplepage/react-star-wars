import './App.css';
import StarshipList from './StarshipList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StarshipPage from './StarshipPage'

function App() {
  return (
    <div className="App">
      <Router> 
          <Switch>
            <Route path='/' exact component={StarshipList}></Route>
            <Route path='/starship' render={({location})=><StarshipPage location={location}/>}></Route>
          </Switch>
         </Router>
    </div>
  );
}

export default App;

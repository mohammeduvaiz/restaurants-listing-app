import './App.css';
import Home from './components/Home'
import RestaurantScreen from './components/RestaurantScreen'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <Router>
      <div className="grid grid-cols-1">
      <Route exact path='/' component={Home}></Route>
      <Route path='/restaurant/:id' component={RestaurantScreen}></Route>
      </div>
    </Router>
  );
}

export default App;

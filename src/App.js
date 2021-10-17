import './App.css';
import Home from './Pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <>  
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Routeguard from './Routeguard';

// component imports
import Login from './components/Login';
import Register from './components/Register';
import Index from './components/Index';
import Chat from "./components/Chat";
import Help1 from "./components/Help1";

function App() {
  return (
    <div className="App">


      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/frightened-from-covid" exact component={Help1} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Routeguard dPath="/chat" dComponent={Chat} />          
        </Switch>
      </Router>


    </div>
  );
}

export default App;

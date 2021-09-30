import 'styles/App.css'
import Index from 'pages';
import Siberiano from "pages/Siberiano"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/index">
            <Index />
          </Route>
          
          <Route path="/Siberiano">
            <Siberiano />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;



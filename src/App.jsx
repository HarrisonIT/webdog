import 'styles/App.css'
import Index from 'pages';
import Siberiano from "pages/Siberiano"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/Siberiano">
            <Siberiano />
          </Route>

          <Route path="/">
            <Index />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;



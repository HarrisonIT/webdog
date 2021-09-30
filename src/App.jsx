import 'styles/App.css'
import Index from 'pages';
import Siberiano from "pages/Siberiano"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Layout from 'layouts/Layout';
import Bordercollie from 'pages/Bordercollie';

function App() {
  return (
    <div className="App">

      <Router>
        <Layout>
          <Switch>

            <Route path="/Siberiano">
              <Siberiano />
            </Route>

            <Route path="/Bordercollie">
              <Bordercollie />
            </Route>

            <Route path="/">
              <Index />
            </Route>

          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;



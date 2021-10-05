import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { userRoutes, authRoutes } from "./routes/allRoutes"
import Authmiddleware from "./routes/Authmiddleware"
import Layout from './components/Layout/index'
import NonAuthLayout from './components/NonAuthLayout/index'

import './assets/scss/theme.scss'

function App() {
  return (
      <Router>
      <Switch>
        {authRoutes.map((route, idx) => (
          <Authmiddleware
            path={route.path}
            layout={NonAuthLayout}
            component={route.component}
            key={idx}
            isAuthProtected={false}
          />
        ))}

        {userRoutes.map((route, idx) => (
          <Authmiddleware
            path={route.path}
            layout={Layout}
            component={route.component}
            key={idx}
            isAuthProtected={true}
            exact
          />
        ))}

      </Switch>
    </Router>
  );
}

export default App;

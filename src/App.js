import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { userRoutes, authRoutes } from "./routes/allRoutes";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'

import Authmiddleware from "./routes/Authmiddleware";
import Layout from "./components/Layout/index";
import NonAuthLayout from "./components/NonAuthLayout/index";

import "./assets/scss/theme.scss";
import "./assets/theme.css";

function App() {

  const location = useLocation()


  return (
      <TransitionGroup>
      <CSSTransition
          timeout={300}
          classNames='fade'
          key={location.key}
        >
      <Switch location={location}>
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
      </CSSTransition>
      </TransitionGroup>
  );
}

App.propTypes = {
  layout: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
  };
};

export default connect(mapStateToProps, null)(App);

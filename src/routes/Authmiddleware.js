import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"


// && !localStorage.getItem("authUser")
const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      // if (!isAuthProtected) {
      //   return (
      //     <Redirect
      //       to={{ pathname: "/login", state: { from: props.location } }}
      //     />
      //   )
      // }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default Authmiddleware

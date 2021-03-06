import PropTypes from "prop-types"
import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

import SidebarContent from "./SidebarContent"

const Sidebar = props => {

  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? <SidebarContent layout={props.layout} /> : <SidebarContent layout={props.layout} />}
        </div>
      </div>
    </React.Fragment>
  )
}

Sidebar.propTypes = {
  type: PropTypes.string,
}

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  }
}
export default connect(
  mapStatetoProps,
  {}
)(withRouter(Sidebar))

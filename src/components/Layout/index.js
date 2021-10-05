import PropTypes from 'prop-types'
import React, { Component } from "react"

import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import Sidebar from "./Sidebar"


class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    }
    this.toggleMenuCallback = this.toggleMenuCallback.bind(this)
  }

  capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }
  
  toggleMenuCallback = () => {
    if (this.props.leftSideBarType === "default") {
      this.props.changeSidebarType("condensed", this.state.isMobile)
    } else if (this.props.leftSideBarType === "condensed") {
      this.props.changeSidebarType("default", this.state.isMobile)
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="layout-wrapper">
          <Sidebar
            type={this.props.leftSideBarType}
            isMobile={this.state.isMobile}
          />
          <div className="main-content">{this.props.children}</div>
          {/* <Footer /> */}
        </div>
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  leftSideBarType: PropTypes.any,
  location: PropTypes.object,
}

// const mapStatetoProps = state => {
//   return {
//     ...state.Layout,
//   }
// }
export default withRouter(Layout)

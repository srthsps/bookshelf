import PropTypes from 'prop-types'
import React, { useState } from "react"

import { connect } from "react-redux"
import { Form, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Input, Button } from "reactstrap"

import { Link } from "react-router-dom"

// Import menuDropdown
// import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"
// import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
// import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"



// Redux Store
import {
  changeSidebarType,
  toggleLeftmenu,
  showSidebar
} from "../../store/actions"

const Header = props => {
  const [search, setsearch] = useState(false)
  const [singlebtn, setSinglebtn] = useState(false)

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)


  function tToggle() {
    var body = document.body;
    if (window.screen.width <= 992) {
      body.classList.toggle("sidebar-enable");
    } else {
      // body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
}

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  
                    {/* Logo sm Image */}
                  {/* <img src={logosmImg} alt="" height="22" /> */}
                </span>
                <span className="logo-lg">
                <h1 style={{color:"teal"}} className="mt-3">BookShelf</h1>
                  {/* <img src={logodarkImg} alt="" height="45" /> */}
                </span>
              </Link>

              {/* <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                    Logo sm Image
                  <img src={logosmImg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                    Logo light Image
                  <img src={logolightImg} alt="" height="45" />
                </span>
              </Link> */}

            </div>
            <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={() => {
                tToggle()
              }}
              data-target="#topnav-menu-content"
            >
              <i className="mdi mdi-menu"></i>
            </button>

            <div className="d-none d-sm-flex">

              {/* <h4 className="align-self-center m-0">BookShelf</h4> */}

            </div>
          </div>

          <div className="d-flex">
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search ..."
                />
                <span className="fa fa-search"></span>
              </div>
            </form>

            <Dropdown
              className="d-inline-block d-lg-none ms-2"
              onClick={() => {
                setsearch(!search)
              }}
              type="button"
            >
              <DropdownToggle
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                tag="button"
              > <i className="mdi mdi-magnify"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                <Form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <Input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                      <div className="input-group-append">
                        <Button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></Button>
                      </div>
                    </div>
                  </div>
                </Form>
              </DropdownMenu>
            </Dropdown>

            {/* <LanguageDropdown /> */}

            {/* <NotificationDropdown /> */}

            {/* <ProfileMenu /> */}
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  showSidebar: PropTypes.any,
  leftSideBarType: PropTypes.any,
  toggleLeftmenu: PropTypes.func
}

const mapStatetoProps = state => {
  const {
    leftSideBarType,
    showSidebar,
    toggleLeftmenu
  } = state.Layout
  return { leftSideBarType,showSidebar,toggleLeftmenu }
}

export default connect(mapStatetoProps, {
  changeSidebarType,
  toggleLeftmenu,
  showSidebar
})(Header)

import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

import SimpleBar from "simplebar-react"

import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"



const SidebarContent = props => {

  const ref = useRef()

  const tToggle = ()=>{
    var body = document.body;
    body.classList.toggle("sidebar-enable");
  }
  
  useEffect(() => {
    const pathName = props.location.pathname.substring(1)
    
    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        let itemSubPaths = items[i].pathname.split('/')
        let currentPathArray = pathName.split('/')
        if (currentPathArray[0]===itemSubPaths[itemSubPaths.length - 1]) {
          matchingMenuItem = items[i]
          
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [])

  useEffect(() => {
    ref.current.recalculate()
    
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }
    

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
    
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/dashboard" style={{textDecoration:"none"}} className="waves-effect">
                <i className="ti-home"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/libraries" style={{textDecoration:"none"}} className="waves-effect">
                <i className="ti-archive"></i>
                <span>Libraries</span>
              </Link>
            </li>

            <li>
              <Link to="/books" style={{textDecoration:"none"}} className="waves-effect">
                <i className="ti-book"></i>
                <span>Books</span>
              </Link>
            </li>

            <li>
              <Link to="/users" style={{textDecoration:"none"}} className="waves-effect">
                <i className="ti-user"></i>
                <span>Users</span>
              </Link>
            </li>

            <li>
              <Link to="/contact" style={{textDecoration:"none"}} className="waves-effect">
                <i className="ti-email"></i>
                <span>Contact</span>
              </Link>
            </li>

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-bookmark-alt"></i>
                <span>Contact</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/books">Books </Link>
                </li>
                <li>
                  <Link to="/users">Users </Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(SidebarContent)

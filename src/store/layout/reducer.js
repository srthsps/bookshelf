import {
  CHANGE_SIDEBAR_TYPE,
  TOGGLE_LEFTMENU,
  SHOW_SIDEBAR,
} from "./actionTypes";

const INIT_STATE = {
  leftSideBarType: "default",
  isMobile: false,
  showSidebar: false,
  leftMenu: false,
};

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_SIDEBAR_TYPE:
      return {
        ...state,
        leftSideBarType: action.payload.sidebarType,
      };
    case SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: action.payload,
      };
    case TOGGLE_LEFTMENU:
      return {
        ...state,
        leftMenu: action.payload,
      };
    default:
      return state;
  }
};

export default Layout;

import { CHANGE_SIDEBAR_TYPE,
  SHOW_SIDEBAR,
  TOGGLE_LEFTMENU } from "./actionTypes"

  export const changeSidebarType = (sidebarType, isMobile) => {
    return {
      type: CHANGE_SIDEBAR_TYPE,
      payload: { sidebarType, isMobile },
    }
  }

  export const showSidebar = isopen => ({
    type: SHOW_SIDEBAR,
    payload: isopen,
  })
  
  export const toggleLeftmenu = isopen => ({
    type: TOGGLE_LEFTMENU,
    payload: isopen,
  })
  
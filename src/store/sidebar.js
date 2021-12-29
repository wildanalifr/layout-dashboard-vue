export default {
  namespaced: true,
  state: {
    sidebar: false,
    menuSidebar: 'Dashboard',
  },
  mutations: {
    setSidebar: (state) => {
      state.sidebar = !state.sidebar
    },
    setMenuSidebar: (state, payload) => {
      state.menuSidebar = payload
    },
  },
  getters: {
    sidebar: (state) => state.sidebar,
    menuSidebar: (state) => state.menuSidebar,
  },
}

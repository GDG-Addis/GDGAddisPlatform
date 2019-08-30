import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: 'Home', to: '/', icon:'home'},
      { text: 'DevFest 2019', to: '/devfest', icon:'toc'},
      { text: 'Events', to: '/events', icon: 'rounded_corner'},
      { text: 'Team', to: '/team', icon:'group'},
      { text: 'About', to: '/about', icon: 'toc'},
      { text: 'WTM Addis', to: '/wtmaddis', icon: 'toc'},
      { text: 'News', to: '/news', icon: 'toc'},
      { text: 'Addis Forum', to: '/forum', icon: 'toc'},
      { text: 'Jobs/Interships', to: 'jobsInternship', icon: 'toc'},
      { text: 'Contact', to: '/contact', icon: 'person' }
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})

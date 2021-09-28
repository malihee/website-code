import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {},
    getters: {},
    actions: {
         async saveUser(context, { username, email, password }) {
    const data = {
    //   id: uuid(),
      username,
      email,
      password,
      timestamp: new Date().getTime()
    }
    try {
      await this.$axios.post('/api/register', data)
    } catch (error) {
      console.error(error)
    }
  }
    },
    mutations: {}
  })
}
export default createStore
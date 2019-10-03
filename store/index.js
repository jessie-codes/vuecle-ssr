import axios from 'axios'

export const state = () => ({
  sessions: [],
  speakers: []
})

export const mutations = {
  setSessions (state, sessions) {
    state.sessions = sessions
  },
  setSpeakers (state, speakers) {
    state.speakers = speakers
  }
}

export const actions = {
  getSpeakers ({ commit }) {
    axios.get('http://localhost:3000/api/speaker').then(({ data }) => {
      commit('setSpeakers', data)
    })
  }
}

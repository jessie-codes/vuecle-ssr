export const state = () => ({
  sessions: []
})

export const mutations = {
  setSessions (state, sessions) {
    state.sessions = sessions
  }
}

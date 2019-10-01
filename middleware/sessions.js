import axios from 'axios'

export default function ({ store }) {
  return axios.get('http://localhost:3000/api/session').then(({ data }) => {
    store.commit('setSessions', data)
  })
}

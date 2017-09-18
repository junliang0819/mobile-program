import axios from 'axios';
axios.defaults.headers.common['Content-Type'] = 'application/json;'
let api = {
  get (url) {
    return axios.get(url,{
      
    })
  },
  post (url, data) {
    return axios.post(url,data)
  }
}

export default api

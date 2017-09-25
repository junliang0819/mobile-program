import axios from 'axios';
import { Toast } from 'mint-ui';
axios.defaults.headers.common['Content-Type'] = 'application/json;'
let api = {
  get (url) {
    return axios.get(url,{
      
    })
    .then(rs=>{
      if(rs.data.error_response){
        Toast(rs.data.error_response.msg);
      }else{
        return rs.data
      }
    })
    .catch(()=>{
      Toast('服务器请求错误！');
    })
  },
  post (url, data) {
    return axios.post(url,data).then(rs=>{
      if(rs.data.error_response){
        Toast(rs.data.error_response.msg);
      }else{
        return rs.data
      }
      
    })
    .catch(()=>{
      Toast('服务器请求错误！');
    })
  }
}

export default api

import axios from 'axios';
import { Toast,Indicator } from 'mint-ui';
axios.defaults.headers.common['Content-Type'] = 'application/json;'
let api = {
  get (url) {
    Indicator.open({
      spinnerType: 'fading-circle'
    });
    return axios.get(url,{
      
    })
    .then(rs=>{
      Indicator.close()
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
    Indicator.open({
      spinnerType: 'fading-circle'
    });
    return axios.post(url,data).then(rs=>{
      Indicator.close()
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

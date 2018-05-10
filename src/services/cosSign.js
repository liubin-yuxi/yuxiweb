const APP_SIGN_URL = 'cosSign/getAppSign/';

const service = {
  getAppSign (data) {
    return axios.post(APP_SIGN_URL,data).then((response) => {
      if(response.data){
        return response.data
      }else{
        
      }
    }, (response) => {
      return false;
    });
  }
}

export default service

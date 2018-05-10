module.exports={
    list(params){
        return axios.post('wdCmsAnswer/applyList/',params,{
            withCredentials:true
        }).then((resp)=>{
            return resp.data.data;
        })
    },
    detail(answerId){
        return axios.post('wdCmsAnswer/detail/',{answerId},{
            withCredentials:true
        }).then((resp)=>{
            return resp.data.data
        })
    },
    audit(params){
        console.log("audit para:",params)
        return axios.post('wdCmsAnswer/audit/',params,{
            withCredentials:true
        }).then((resp)=>{
            return resp.data.data
        })
    }

}
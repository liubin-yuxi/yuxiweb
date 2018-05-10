module.exports = {
  list(params) {
    return axios.post('wdCmsTopic/list/',params,{
      withCredentials: true
    })
      .then((resp) => {
        return resp.data.data;
      });
  },
  setShow(topicId,show) {
    return axios.post('wdCmsTopic/setShow/',{topicId,show},{
      withCredentials: true
    })
      .then((resp) => {
        return resp.data.data;
      });
  },
    detail(topicId){
      return axios.post('wdCmsTopic/detail/',{topicId},{
          withCredentials:true
      }).then((resp)=>{
          return resp.data.data;
      })
    },
    editTopic(params){
      return axios.post('wdCmsTopic/editTopic/',params,{
          withCredentials:true
      }).then((resp)=>{
          return resp.data.data;
      })
    },
  move(topicId,step) {
    return axios.post('wdCmsTopic/move/',{topicId,step},{
      withCredentials: true
    })
      .then((resp) => {
        return resp.data.data;
      });
  },
  remove(topicId) {
    return axios.post('wdCmsTopic/delete/',{topicId},{
      withCredentials: true
    })
      .then((resp) => {
        return resp.data.data;
      });
  },
    createTopic(params) {
        return axios.post('wdCmsTopic/createTopic/',params,{
            withCredentials: true
        })
            .then((resp) => {
            return resp.data.data;
    });
    },
    searchQuestions(params){
      return axios.post('wdCmsTopic/searchQuestions/',params,{
          withCredentials:true
      }).then((resp)=>{
          return resp.data.data;
      });
    },
    topicQuestions(params){
        return axios.post('wdCmsTopic/topicQuestions/',params,{
            withCredentials:true
        }).then((resp)=>{
            return resp.data.data;
    });
    },
    topicApprovingQuestions(params){
        return axios.post('wdCmsTopic/topicApprovingQuestions/',params,{
            withCredentials:true
        }).then((resp)=>{
            return resp.data.data;
    });
    },
    addQuestionToTopic(topicId,questionId){
        return axios.post('wdCmsTopic/addQuestionToTopic/',{topicId,questionId},{
            withCredentials:true
        }).then((resp)=>{
            return resp.data.data;
    });
    },
    deleteQuestionFromTopic(topicId,questionId){
        return axios.post('wdCmsTopic/deleteQuestionFromTopic/',{topicId,questionId},{
            withCredentials:true
        }).then((resp)=> {
            return resp.data.data;
    });
    }
}
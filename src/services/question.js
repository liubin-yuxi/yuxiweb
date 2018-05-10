module.exports = {
    list(params) {
        return axios.post('wdCmsQuestion/list/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },
    setShow(questionId, show) {
        return axios.post('wdCmsQuestion/setShow/', {questionId, show}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },
    setRecommend(questionId, recommend) {
        return axios.post('wdCmsQuestion/setRecommend/', {questionId, recommend}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },
    move(questionId, step) {
        return axios.post('wdCmsQuestion/move/', {questionId, step}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },
    delete(questionId) {
        return axios.post('wdCmsQuestion/delete/', {questionId}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },
    detail(questionId) {
        return axios.post('wdCmsQuestion/detail/', {questionId}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },
    editDetail(question) {
        return axios.post('wdCmsQuestion/editDetail/', question, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },
    answers(params) {
        return axios.post('/wdCmsQuestion/answers/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },
    setAnswerShow(answerId, show) {
        return axios.post('/wdCmsQuestion/setAnswerShow/', {
            answerId,
            show
        }, {withCredentials: true}).then((resp) => {
            return resp.data.data;
    })
    },
    deleteAnswer(answerId){
        return axios.post('/wdCmsQuestion/deleteAnswer/', {answerId}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },
    editAnswer(answerId,content){
        return axios.post('/wdCmsQuestion/editAnswer/', {answerId,content}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },
    answerMove(answerId,toSeq){
        return axios.post('/wdCmsQuestion/answerMove/', {answerId,toSeq}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },
    comments(params) {
        return axios.post('/wdCmsQuestion/comments/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },
    setCommentShow(commentId, show) {
        return axios.post('/wdCmsQuestion/setCommentShow/', {
            commentId,
            show
        }, {withCredentials: true}).then((resp) => {
            return resp.data.data;
    })
    },
    deleteComment(commentId){
        return axios.post('/wdCmsQuestion/deleteComment/', {commentId}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
    })
    },


}
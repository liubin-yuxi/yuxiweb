module.exports = {
    list(params) {
        return axios.post('/wdCmsTag/list/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
        })
    },
    createTag(name,iconUrl) {
        return axios.post('/wdCmsTag/createTag/', {name,iconUrl}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
        })
    },
    move(tagId,step) {
        return axios.post('/wdCmsTag/move/', {tagId,step}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
        })
    },
    remove(tagId) {
        return axios.post('/wdCmsTag/delete/', {tagId}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
        })
    }

}
// const LOGIN = 'console/admin/login'
const LOGIN = 'wdCmsAdmin/login/'

module.exports = {
    login(username, password) {
        return axios.post(LOGIN, {username, password}, {
            withCredentials: true
        })
            .then((resp) => {
                console.log(resp);
                return resp.data.data;
            });
    }
}
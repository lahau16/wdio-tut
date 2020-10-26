const axios = require('axios');
class ApiData {
    get(Url, Params) {
        try {
            const response = axios.get(Url, Params)
            console.log(response)
        } catch (error) {
            console.log(error);
        }
        return this;
    }
    post(Url, Header, body) {
        var config = {
            method: 'post',
            url: Url,
            headers: Header,
            data: body
        };
        try {
            const response = axios(config);
            return response.data;
        } catch (error) {
            console.log(error);
        }
        return this;
    }
    put(Url, Header, body) {
        var config = {
            method: 'put',
            url: Url,
            headers: Header,
            data: body
        };
        try {
            const response = axios(config);
            return response.data;
        } catch (error) {
            console.log(error);
        }
        return this;
    }

}
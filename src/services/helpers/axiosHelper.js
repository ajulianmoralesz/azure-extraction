import axios from "axios"

function request()
{
    let token = btoa(`:${process.env.VUE_APP_TOKEN}`);
    let basicAuth = `Basic ${token}`;
    return axios.create({
      baseURL: process.env.VUE_APP_APIURL,
      headers: {
        'Authorization' : basicAuth
      }
    })
}

export default {
    request
}


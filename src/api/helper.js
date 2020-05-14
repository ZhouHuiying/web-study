import axios from 'axios'

export function get(url){
    return function(params){
        return axios.get(url,{
            params
        }).then(res =>{
            return res
        })
    }
}

export function post(url){
    return function(params){
        return axios.post(url,params).then(res =>{
            return res
        })
    }
}
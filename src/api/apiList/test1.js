import {get,post} from '../helper.js'

const test = get('/api/seller')

//登陆接口
const login = post('/test/post')

export{
    test,
    login
}
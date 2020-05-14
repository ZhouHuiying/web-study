
const appData = require('./data.json')
const bodyParser = require('body-parser');
const seller = appData.seller
const goods = appData.goods
// console.log(goods)

module.exports = {
    devServer: {
        before(app) {
            app.use(bodyParser.json()); // for parsing application/json
            app.use(bodyParser.urlencoded({extended:true})); // for parsing application/x-www-form-urlencoded

            app.get('/api/seller', function (req, res) {
                res.json({
                    errno: 0,
                    data: seller
                })
            })
            app.get('/api/goods', function (req, res) {
                res.json({
                    errno: 0,
                    data: goods
                })
            })
            app.post('/test/post', function(req, res) {  
                console.log(req.body)
                if (req.body.user == 'admin' && req.body.psw == '123456') {
                    res.json({
                        code: 200,
                        data: {msg: '验证成功'}
                    })
                } else {
                    res.json({
                        code: 500,
                        data: {msg: '登陆失败'}
                    })
                }
            });  
        }
    }
}
const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = [
    {
        //获取用户信息
        url:'/api/user/info',
        method:'get',
        response(ctx){
            const { headers } = ctx;
            const authorization = headers['authorization'] || headers['Authorization'];
            
            //校验消息头是否存在token
            if (!authorization) {
                return {
                    errno: 401,
                    msg: '未登录'
                }
            }
            
            return {
                errno: 0,
                data: {
                    username:Random.title(),
                    nickname:Random.cname(),
                }
            }
        }
    },
    {
        //注册
        url:'/api/user/register',
        method:'post',
        response(){
            return {
                errno: 0
            }
        }
    },
    {
        //登录
        url:'/api/user/login',
        method:'post',
        response(){
            return {
                errno: 0,
                data: {
                    token:Random.word(20)     //模拟生成token
                }
            }
        }
    }
]
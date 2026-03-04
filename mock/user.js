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
            

            //1.检查是否符合基本的验证格式
            if(!authorization.startsWith('Bearer ')){
                return {
                    errno: 401,
                    msg: '未登录'
                }
            }
            
            //2.提取token
            const token=authorization.split(' ')[1];

            //3.校验token是否有效（这里简单判断token是否为空）
            if(!token){
                return {
                    errno: 401,
                    msg: 'token无效'
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
const Mock = require('mockjs');

const Random = Mock.Random;

const getStatList=require('./data/getStatList');

const DEFAULT_TOTAL = 100;
const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;
const MAX_PAGE_SIZE = 100;

// 进程级缓存：同一个 questionId 始终使用同一份数据集
const statListCache = new Map();

//封装一个函数，用于将字符串类型的数字，转化为正整数
function normalizePositiveInt(value, defaultValue) {
    const num = parseInt(value, 10);
    if (Number.isNaN(num) || num <= 0) return defaultValue;
    return num;
}

module.exports = [
    //答卷列表
    {
        url:'/api/stat/:questionId',
        method:'get',
        response(ctx){
            const { params = {}, query = {} } = ctx || {};      //从ctx中获取请求参数
            const { questionId = '' } = params;

            const page = normalizePositiveInt(query.page, DEFAULT_PAGE);
            let pageSize = normalizePositiveInt(query.pageSize, DEFAULT_PAGE_SIZE);
            pageSize = Math.min(pageSize, MAX_PAGE_SIZE);

            const cacheKey = questionId || '__default_question__';
            if (!statListCache.has(cacheKey)) {
                statListCache.set(cacheKey, getStatList(DEFAULT_TOTAL));
            }

            //根据每次发起请求的分页相关数据，从缓存中获取数据
            const allList = statListCache.get(cacheKey) || [];
            const total = allList.length;
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            const list = allList.slice(start, end);

            return {
                errno:0,
                data:{
                    total,
                    list
                }
            }
        }
    },
    //获取单个组件的统计数据汇总
    {
        url:'/api/stat/:questionId/:componentId',
        method:'get',
        response(){
            return {
                errno:0,
                data:{
                    stat:[
                        {name:'选项1',count:20},
                        {name:'选项2',count:10},
                        {name:'选项3',count:5}
                    ]
                }
            }
        }
    }
]

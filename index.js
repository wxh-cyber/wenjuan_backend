const Koa=require('koa');
const Router=require('koa-router');
const mockList=require('./mock');

const app=new Koa();
const router=new Router();

async function getRes(fn,ctx){
    return new Promise(resolve=>{
        setTimeout(()=>{
            const res=fn(ctx);
            resolve(res);
        },1000);
    })
}

//注册mock路由
mockList.forEach(item=>{
    const {url,method,response}=item;
    router[method](url,async ctx=>{
        //const res=response();
        const res=await getRes(response,ctx);      //模拟网络请求的加载状态
        ctx.body=res;
    });
});

//注册路由
app.use(router.routes());
app.listen(3001,()=>{
    console.log('mock server is running at http://localhost:3001');
})
/**
 * @description 生成统计列表
 * @author 小慕
 */

const Mock=require('mockjs');
const Random=Mock.Random;

const getComponentList=require('./getComponentList');

module.exports=function getStatList(len=10){
    const componentList=getComponentList();

    const res=[];
    
    for(let i=0;i<len;i++){
        const stat={
            _id:Random.id()
        }

        //增加各个组件的id value
        componentList.forEach()
    }
}
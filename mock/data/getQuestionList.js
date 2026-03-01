/**
 * @description 生成问卷列表
 * @author 小慕
 */

const Mock=require('mockjs');
const Random=Mock.Random;

function getQuestionList(opt={}){
    const {len=10,isDeleted=false,isStar=false}=opt;
    const list=[];
    for(let i=0;i<len;i++){
        list.push({
            _id:Random.id(),
            title:Random.ctitle(),
            isPublished:Random.boolean(),
            isStar,
            answerCount:Random.integer(0,100),
            createTime:Random.datetime(),
            isDeleted      //假删除
        })
    }

    return list;
}

module.exports=getQuestionList;
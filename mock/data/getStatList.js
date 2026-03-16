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
        //一个用户的答卷
        const stat={
            _id:Random.id()
        }

        //增加各个组件的id value
        componentList.forEach(c => {
            const {type,fe_id,props}=c;

            switch(type){
                case 'QuestionInput':
                    stat[fe_id]=Random.ctitle();
                    break;
                case 'QuestionTextarea':
                    stat[fe_id]=Random.ctitle();
                    break;
                case 'QuestionRadio':
                    stat[fe_id]=props.options[0].text;
                    break;
                case 'QuestionCheckbox':
                    stat[fe_id]=`${props.list[0].text},${props.list[1].text}`;
                    break;
            }
        });

        res.push(stat);
    }

    return res;
}

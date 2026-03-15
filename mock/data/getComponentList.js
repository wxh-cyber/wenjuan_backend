/**
 * @description 生成组件列表
 * @author 小慕
 */

const Mock = require('mockjs');
const Random = Mock.Random;

function getComponentList(){
    return [
        {   //Info
            fe_id: Random.id(),
            type: 'QuestionInfo',
            title: '问卷信息',
            isHidden: false,
            isLocked: false,
            props: {
                title: '问卷标题',
                desc: '问卷描述...'
            }
        },
        {   //Paragraph
            fe_id: Random.id(),
            type: 'QuestionParagraph',
            title: '段落',
            isHidden: false,
            isLocked: false,
            props: {
                text: '一行段落',
                isCenter: false
            }
        },
        {   //Input
            fe_id: Random.id(),
            type: 'questionInput',
            title: '输入框',
            isHidden: false,
            isLocked: false,
            props: {
                title: '你的姓名',
                placeholder: '请输入姓名...'
            }
        },
        {
            fe_id: Random.id(),
            type: 'questionInput',
            title: '输入框',
            isHidden: false,
            isLocked: false,
            props: {
                title: '你的手机号',
                placeholder: '请输入手机号...'
            }
        },
        {   //Textarea
            fe_id: Random.id(),
            type: 'QuestionTextarea',
            title: '多行输入',
            isHidden: false,
            isLocked: false,
            props: {
                title: '你的爱好',
                placeholder: '请输入你的爱好...'
            }
        },
        {   //Radio
            fe_id: Random.id(),
            type: 'QuestionRadio',
            title: '单选',
            isHidden: false,
            isLocked: false,
            props: {
                title: '单选标题',
                isVertical: false,
                options: [
                    { value: 'item1', text: '选项1' },
                    { value: 'item2', text: '选项2' },
                    { value: 'item3', text: '选项3' },
                ],
                value: ''
            }
        },
        {   //Checkbox
            fe_id: Random.id(),
            type: 'QuestionCheckbox',
            title: '多选',
            isHidden: false,
            isLocked: false,
            props: {
                title: '多选标题',
                isVertical: false,
                list: [
                    { value: 'item1', text: '选项1' },
                    { value: 'item2', text: '选项2' },
                    { value: 'item3', text: '选项3' },
                ]
            }
        }
    ]
}

module.exports=getComponentList;
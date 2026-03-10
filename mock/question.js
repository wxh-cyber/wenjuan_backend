const Mock = require('mockjs');
const getQuestionList = require('./data/getQuestionList');

const Random = Mock.Random;

module.exports = [
    {
        //获取单个问卷信息
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle(),
                    //组件列表
                    componentList: [
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
            }
        }
    },
    {
        //创建问卷
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    {
        //获取（查询）问卷列表
        url: '/api/question',
        method: 'get',
        response(ctx) {
            const { url = '', query = {} } = ctx;
            const isDeleted = url.indexOf('isDeleted=true') >= 0;
            const isStar = url.indexOf('isStar=true') >= 0;
            const pageSize = parseInt(query.pageSize) || 10;

            return {
                errno: 0,
                data: {
                    list: getQuestionList({ len: pageSize, isDeleted, isStar }),      //当前页
                    total: 100     //总数，分页
                }
            }
        }
    },
    {
        //更新问卷
        url: '/api/question/:id',
        method: 'patch',
        response() {
            return {
                errno: 0
            }
        }
    },
    {
        //复制问卷
        url: '/api/question/duplicate/:id',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    {
        //批量彻底删除
        url: '/api/question',
        method: 'delete',
        response() {
            return {
                errno: 0
            }
        }
    }
]

//人员管理相关的配置
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    namespaced:true,
    actions: {
        /* 添加一个新王的人 */
        addPersonWang (context, personObj) {
            if (+personObj.name.indexOf('王') === 0) {
                context.commit('addPerson', personObj)
            } else {
                alert('只能添加姓王的人！')
            }
        },
        /* 添加一个随机名字的人 */
        addPersonRandomlyName(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('addPerson', {id: nanoid(), name: response.data})
                },error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        /* 添加人 */
        addPerson (state, personObj) {
            state.personList.unshift(personObj)
        }
    },
    state: {
        personList: []
    },
    getters: {
        /* 获取第一个人的名字 */
        getFirstPersonName (state) {
            return state.personList[0]?.name;
        }
    }
}
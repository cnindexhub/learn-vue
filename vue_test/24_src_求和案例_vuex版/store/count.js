// count管理相关配置
export default {
    namespaced:true,
    actions: {
        jiaOdd (context, n) {
            if ((context.state.sum + n) % 2 != 0) {
                context.commit('JIA', n)
            }
        },
        jiaWait (context, n) {
            setTimeout(() => {
                context.commit('JIA', n)
            }, 500)
        },
    },
    mutations: {
        JIA(state, n) {
            console.log(state, n)
            state.sum += n
        },
        JIAN(state, n) {
            state.sum -= n
        }
    },
    state: {
        sum: 0
    },
    getters: {
        bigSum (state) {
            return state.sum * 10
        }
    }
}
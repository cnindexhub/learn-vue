<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <!-- 通过route的query属性传值 to的模板字符串形式 缺点看着复杂理解，很凌乱 -->
<!--        <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{ message.title }}</router-link>-->
        <!-- 通过route的query属性传值 to的对象形式 -->
<!--        <router-link-->
<!--          :to="{-->
<!--            path: '/home/message/detail',-->
<!--            query: {-->
<!--              id: message.id,-->
<!--              title: message.title-->
<!--            }-->
<!--          }"-->
<!--        >-->
<!--          {{ message.title }}-->
<!--        </router-link>-->
        <!-- 通过route的name属性可以映射path，可以不用写过长的path-->
<!--        <router-link-->
<!--          :to="{-->
<!--            name: 'detail',-->
<!--            query: {-->
<!--              id: message.id,-->
<!--              title: message.title-->
<!--            }-->
<!--          }"-->
<!--        >-->
<!--          {{ message.title }}-->
<!--        </router-link>-->
        <!-- 通过route的params属性传递参数,必须写name，不能使用path to的对象形式-->
<!--        <router-link-->
<!--          :to="{-->
<!--            name: 'detail',-->
<!--            params: {-->
<!--              id: message.id,-->
<!--              title: message.title-->
<!--            }-->
<!--          }"-->
<!--        >-->
<!--          {{ message.title }}-->
<!--        </router-link>-->
        <!-- 通过route的params属性传递参数 to的模板字符串形式-->
<!--        使用replace属性配置route-link使用replace模式进行路由跳转， 注：replace模式是指跳转后的浏览器hisotry历史上次记录会被本次历史替换-->
        <router-link replace :to="`/home/message/detail/${message.id}/${message.title}`">
          {{ message.title }}
        </router-link>
        <button @click="pushShow(message)">push查看</button>
        <button @click="replaceShow(message)">replace查看</button>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {
          id: 1,
          title: '你好啊1'
        },
        {
          id: 2,
          title: '你好啊2'
        },
        {
          id: 3,
          title: '你好啊3'
        }
      ]
    }
  },
  methods: {
    pushShow(message) {
      this.$router.push({
        name: 'detail',
        params: {
          id: message.id,
          title: message.title
        }
      })
    },
    replaceShow(message) {
      this.$router.replace({
        name: 'detail',
        params: {
          id: message.id,
          title: message.title
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <h1>人员列表</h1>
    <h2>Count组件求和为：{{ sum }}</h2>
    <h2>列表第一个人的名字是：{{ firstName }}</h2>
    <input v-model="name" placeholder="请输入名称"/>
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonRandomlyName">添加一个人，名字随机</button>
    <ul>
      <li :key="p.id" v-for="p in personList">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: "Person",
  data () {
    return {
      name: ''
    }
  },
  computed: {
    sum() {
      return this.$store.state.countAbout.sum
    },
    firstName() {
      return this.$store.getters['personAbout/getFirstPersonName']
    },
    personList() {
      return this.$store.state.personAbout.personList
    }
  },
  methods: {
    add() {
      let person = {id: nanoid(), name: this.name}
      this.$store.commit('personAbout/addPerson', person)
    },
    addWang() {
      let person = {id: nanoid(), name: this.name}
      this.$store.dispatch('personAbout/addPersonWang', person)
    },
    addPersonRandomlyName() {
      this.$store.dispatch('personAbout/addPersonRandomlyName')
    }
  }
}
</script>

<style scoped>

</style>
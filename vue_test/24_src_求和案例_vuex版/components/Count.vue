<template>
  <div>
    <h1>当前求和为 {{ sum }}</h1>
    <h2>当前求和的10倍为 {{ bigSum }}</h2>
    <h2>我在尚硅谷，学习前端</h2>
    <h2 style="color: red;">Person组件的总人数：{{ personList.length }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increament(n)">+</button>
    <button @click="decreament(n)">-</button>
    <button @click="increamentOdd(n)">当前和为奇数时相加</button>
    <button @click="increamentWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1
    }
  },
  computed: {
    ...mapState('countAbout', ['sum']),
    ...mapGetters('countAbout', ['bigSum']),
    ...mapState('personAbout', ['personList'])
  },
  methods: {
    ...mapMutations('countAbout', {increament: 'JIA', decreament: 'JIAN'}),
    ...mapActions('countAbout', {increamentOdd: 'jiaOdd', increamentWait: 'jiaWait'})
  }
}
</script>

<style scoped>

</style>
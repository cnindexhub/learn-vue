<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001<input type="text"></input></li>
    <li>news002<input type="text"></input></li>
    <li>news003<input type="text"></input></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
      time: null // 定时器实例
    }
  },
  // beforeDestroy() {
  //   console.log('News组件被销毁了')
  // },
  // mounted() {
  //   console.log('News组件被挂载完成了')
  // },
  activated() {
    console.log('News组件被激活了')
    this.time = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    clearInterval(this.time)
    console.log('News组件失活了')
  }
}
</script>

<style scoped>

</style>
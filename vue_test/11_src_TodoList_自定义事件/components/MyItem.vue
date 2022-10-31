<template>
  <li>
    <label v-show="!isUpdate">
      <input
        type="checkbox"
        @change="check"
        :checked="todo.done"
      />
      <span>{{ todo.title }}</span>
    </label>
    <input
      v-show="isUpdate"
      v-model="title"
      ref="title"
      @keyup.enter="updateTitle(todo.id)"
    ></input>
    <slot name="deleteBtn" :id="todo.id" :remove="remove"></slot>
    <slot ref="updateBtn" name="updateBtn" v-show="!isUpdate" :id="todo.id" :isUpdate="isUpdate" :update="update"></slot>
    <slot name="saveBtn" v-show="isUpdate" :id="todo.id" :isUpdate="isUpdate" :save="updateTitle"></slot>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ['todo', 'checkTodo'],
  data() {
    return {
      title: this.todo.title,
      isUpdate: false
    }
  },
  methods: {
    check() {
      this.checkTodo(this.todo.id)
    },
    // 删除todo
    remove(id) {
      if (confirm(`是否删除${this.title}？`)) {
        this.$bus.$emit('removeTodo', id)
      }
    },
    // 修改todo标题
    update(event, id) {
      this.isUpdate = !this.isUpdate
      // 获取焦点
      this.$nextTick(() => {
        this.$refs.title.focus()
      })
    },
    // 修改id
    updateTitle(id) {
      // 判断是否为空
      if (!this.title.trim()) {
        alert('不能修改为空！')
        return;
      }
      this.isUpdate = !this.isUpdate
      this.$bus.$emit('updateTodo', id, this.title)
    }
  }
}
</script>

<style lang="less" scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin: 3px 2px 2px 2px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #cdcdcd;
}
li:hover button{
  display: block;
}
</style>
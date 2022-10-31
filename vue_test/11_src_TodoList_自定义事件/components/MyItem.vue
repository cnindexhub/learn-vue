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
      @blur="updateTitle"
    ></input>
    <slot name="deleteBtn" :id="todo.id" :remove="remove"></slot>
    <slot name="updateBtn" v-show="!isUpdate" :id="todo.id" :update="update"></slot>
    <slot name="saveBtn" v-show="isUpdate" :id="todo.id" :save="updateTitle"></slot>
    <!--    <button class="btn btn-danger" style="display:none">删除</button>-->
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ['todo', 'checkTodo', 'removeTodo', 'updateTodo'],
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
      if (confirm('是否删除？')) {
        this.removeTodo(id)
      }
    },
    // 修改todo标题
    update(event, id) {
      this.isUpdate = !this.isUpdate
      // 如果编辑则获取焦点
      if (this.isUpdate) {

      }
      // 判断是否为空
      if (!this.isUpdate && !this.title.trim()) {
        alert('不能修改为空！')
      }
      // 如果点击后不是修改状态就说明是提交修改
      if (!this.isUpdate) {
        this.updateTodo(id, this.title)
      }
    },
    // 修改id
    updateTitle(id) {
      this.isUpdate = false
      this.updateTodo(id, this.title)
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
<template>
  <div class="todo-footer">
    <label>
      <input
        type="checkbox"
        @change="allCheckToDo(!isAll)"
        :checked="isAll"
      />
    </label>
    <span>
          <span>已完成{{ completedQuantity }}</span> / 全部{{ todos.length }}
        </span>
    <button class="btn btn-danger" @click="beforeClearCompletedTodo">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ['todos', 'allCheckToDo', 'clearCompletedTodo'],
  computed: {
    completedQuantity() {
      return this.todos.reduce((pre, cur) => cur.done ? pre + 1 : pre, 0)
    },
    isAll() {
      return this.todos.length === 0 ? false : this.completedQuantity === this.todos.length
    }
  },
  methods: {
    beforeClearCompletedTodo() {
      this.clearCompletedTodo()
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
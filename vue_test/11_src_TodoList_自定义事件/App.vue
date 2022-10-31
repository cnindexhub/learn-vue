<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addToDo="addToDo"/>
        <MyList
          :todos="todos"
          :checkTodo="checkTodo"
          :removeTodo="removeTodo"
          :updateTodo="updateTodo"
        />
        <MyFooter
          :todos="todos"
          :allCheckToDo="allCheckToDo"
          :clearCompletedTodo="clearCompletedTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>

  import MyHeader from './components/MyHeader'
  import MyList from './components/MyList'
  import MyFooter from './components/MyFooter'
  import {nanoid} from "nanoid";
  export default {
    name: 'App',
    components: {
      MyFooter,
      MyHeader,
      MyList
    },
    data () {
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || [],
      }
    },
    watch: {
      todos: {
        deep: true,
        immediate: true,
        handler(value) {
          localStorage.setItem('todos', JSON.stringify(value))
        }
      }
    },
    methods: {
      addToDo(title) {
        this.todos.unshift({
          id: nanoid(),
          title: title,
          done: false
        })
      },
      // 选中或取消
      checkTodo(id) {
        this.todos.forEach(item => {
          if (item.id === id) {
            item.done = !item.done
          }
        })
      },
      // 选择所有
      allCheckToDo(isAll) {
        this.todos.forEach(item => item.done = isAll)
      },
      // 删除
      removeTodo(id) {
        this.todos = this.todos.filter(item => item.id !== id)
      },
      // 修改todo标题
      updateTodo(id, title) {
        this.todos.forEach(item => {
          if (item.id === id) {
            item.title = title
          }
        })
      },
      // 清除所有已完成的待办
      clearCompletedTodo() {
        this.todos = this.todos.filter(item => !item.done)
      }
    }
  }

</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: cadetblue;
  border: 1px solid cadetblue;
}

.btn-edit:hover {
  color: #333;
  background-color: lightblue;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

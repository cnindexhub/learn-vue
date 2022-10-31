<template>
  <ul class="todo-main">
    <MyItem
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      :checkTodo="checkTodo"
    >
      <template slot="saveBtn" slot-scope="{id, save, isUpdate}">
        <button class="btn btn-save" v-show="isUpdate" @click="save(id)">保存</button>
      </template>
      <template slot="updateBtn" slot-scope="{id, update, isUpdate}">
        <button class="btn btn-edit" v-show="!isUpdate" @click="update($event, id)">编辑</button>
      </template>
      <template slot="deleteBtn" slot-scope="{id, remove}">
        <button class="btn btn-danger" @click="remove(id)">删除</button>
      </template>
    </MyItem>
  </ul>
</template>

<script>

import MyItem from "./MyItem"
export default {
  name: "MyList",
  props: ['todos', 'checkTodo'],
  components: {
    MyItem
  }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
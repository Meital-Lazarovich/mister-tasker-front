<template>
  <section class="task-app">
    <button class="add-btn" @click="goToAdd">Add New</button>
    <TaskList v-if="tasks" :tasks="tasks" @removed="removeTask" @started="startTask"></TaskList>
  </section>
</template>

<script>
import TaskList from "../components/TaskList.vue";

export default {
  name: "task-app",
  data() {
    return {};
  },
  computed: {
    tasks() {
      return this.$store.getters.tasksToShow;
    }
  },
  methods: {
    goToAdd() {
      this.$router.push(`/task/edit`);
    },
    removeTask(taskId) {
      this.$store.dispatch({ type: 'removeTask', taskId });
    },
    startTask(task) {
      this.$store.dispatch({ type: 'startTask', task });
    }
  },
  created() {
    this.$store.dispatch("loadTasks");
  },
  components: {
    TaskList
  }
};
</script>

<style lang="css">
  .task-app .add-btn {
    margin: 30px auto 0;
    display: block;
    padding: 10px;
  }
</style>
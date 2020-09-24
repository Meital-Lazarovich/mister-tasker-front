<template>
  <section class="task-list">
      <TaskPreview v-for="task in tasks" :key="task._id" :task="task" @removed="removeTask" @started="startTask"></TaskPreview>
  </section>
</template>

<script>
import TaskPreview from './TaskPreview.vue'

export default {
  props: ['tasks'],
  methods: {
    removeTask(taskId) {
      this.$emit('removed', taskId)
    },
    startTask(task) {
      this.$emit('started', task)
    }
  },
  components: {
    TaskPreview
  }
}
</script>

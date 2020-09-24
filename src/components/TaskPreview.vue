<template>
    <section class="task-preview">
        <p>{{ task.title }}</p>
        <div class="info">
            <span>Importance: {{ task.importance }}</span>
            <span>Tries Count: {{ task.triesCount }}</span>
            <div class="control">
                <button v-if="!task.doneAt" @click="startTask">Start</button>
                <button @click="removeTask">Delete</button>
            </div>
        </div>
        <div>Description: {{ task.desc }}</div>
        <h3 v-if="task.doneAt">✅ Done</h3>
    </section>
</template>

<script>

export default {
    props: ["task"],
    methods: {
        removeTask() {
            this.$emit('removed', this.task._id)
        },
        startTask() {
            this.$emit('started', this.task)
        }
    },
};
</script>

<style lang="scss">
.task-preview {
    color: #302d36;
    width: 500px;
    margin: 30px auto 0;
    padding: 10px 20px;
    background-color: #e1edef;
    border-radius: 7px;

    p {
        font-weight: bold;
        font-size: 1.3em;
    }

    .info {
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
    }

    .control {
        display: flex;
        justify-content: flex-end;
        width: 110px;
        button:not(:last-child) {
          margin-right: 10px;
        }
    }
}
</style>

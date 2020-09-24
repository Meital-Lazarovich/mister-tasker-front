<template>
    <section class="task-edit">
        <form @submit.prevent="updateTask">
            <div>
                Title:
                <input type="text" v-model="task.title" />
            </div>
            <div>
                Description:
                <textarea cols="30" rows="10" v-model="task.desc"></textarea>
            </div>
            <div>
                Importance::
                <input type="number" min="0" max="3" v-model="task.importance" />
            </div>
            <button depressed color="white" type="submit" v-if="isNew">Add Task</button>
            <button depressed color="white" type="submit" v-else>Save Changes</button>
        </form>
    </section>
</template>


<script>
import { TaskService } from "../services/TaskService.js";

export default {
    data() {
        return {
            task: {},
            isNew: false
        };
    },
    methods: {
        updateTask() {
            if (this.isNew) {
                const task = {...this.task, createdAt: Date.now(), triesCount: 0}
                this.$store.dispatch({ type: "addTask", task });
            }
            else this.$store.dispatch({ type: "updateTask", task: this.task });
            this.$router.push("/task");
        }
    },
    created() {
        const taskId = this.$route.params.id;
        if (!taskId) {
            this.isNew = true;
            return
        }
        TaskService.getById(taskId)
            .then(task => (this.task = JSON.parse(JSON.stringify(task))));
    }
};
</script>

<style lang="css">
.task-edit {
    text-align: center;
    color: #302d36;
    width: 500px;
    margin: 30px auto 0;
    padding: 40px 0;
    background-color: #e1edef;
    border-radius: 7px;
}

.task-edit input {
    padding: 5px;
    border: 1px solid #b9b9b9;
    border-radius: 7px;
    margin: 7px;
}

.task-edit button {
    margin-top: 20px;
}
</style>
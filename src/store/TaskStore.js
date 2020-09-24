import { TaskService } from '../services/TaskService.js'

export default {
    state: {
        tasks: []
    },
    mutations: {
        setTasks(state, { tasks }) {
            state.tasks = tasks
        },
        updateTask(state, { updatedTask }) {
            const idx = state.tasks.findIndex(task => task._id === updatedTask._id);
            state.tasks.splice(idx, 1, updatedTask);
        },
        addTask(state, { addedTask }) {
            state.tasks.push(addedTask);
        },
        removeTask(state, { taskId }) {
            const idx = state.tasks.findIndex(task => task._id === taskId);
            state.tasks.splice(idx, 1);
        }
    },
    getters: {
        tasksToShow(state) {
            return state.tasks
        }
    },
    actions: {
        loadTasks(context) {
            return TaskService.query()
                .then(tasks => {
                    tasks.sort((a, b) => a.createdAt - b.createdAt)
                    return context.commit({ type: 'setTasks', tasks });
                });
        },
        removeTask(context, { taskId }) {
            return TaskService.remove(taskId)
                .then(() => context.commit({ type: 'removeTask', taskId }))
        },
        updateTask(context, { task }) {
            return TaskService.update(task)
                .then(updatedTask => context.commit({ type: 'updateTask', updatedTask }))
        },
        addTask(context, { task }) {
            return TaskService.add(task)
                .then(addedTask => context.commit({ type: 'addTask', addedTask }))
        },
        startTask(context, { task }) {
            return TaskService.start(task._id)
                .then(updatedTask => {
                    console.log('startTask -> updatedTask', updatedTask);
                    return context.commit({ type: 'updateTask', updatedTask });
                })
        }
    }
}

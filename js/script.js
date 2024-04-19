const { createApp } = Vue

createApp({
    data() {
        return {
            newTodo: {
                text: "",
                done: false
            },
            toDo: [
                {
                    text: "flying on the Everest",
                    done: false
                },
                {
                    text: "walk through Mordor",
                    done: true
                },
            ]
        }
    }, methods: {

    }
}).mount('#app')
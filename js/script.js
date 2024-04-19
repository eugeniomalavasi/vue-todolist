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
        addToDo: function () {
            const newTodoCopy = { ...this.newTodo }
            console.log(newTodoCopy);
            this.toDo.push(newTodoCopy)
        }
    }
}).mount('#app')
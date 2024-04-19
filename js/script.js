const { createApp } = Vue

createApp({
    data() {
        return {
            placeDin: "inserisci un task",
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
            if( this.newTodo.text !== "") {
            const newTodoCopy = { ...this.newTodo }
            this.toDo.push(newTodoCopy);
            this.newTodo.text = ""
            
            } else {
                alert("inserisci un task")
            }
        },
    }
}).mount('#app')
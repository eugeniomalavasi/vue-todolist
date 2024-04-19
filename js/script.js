const { createApp } = Vue

createApp({
    data() {
        return {
            deleteFlag: true,
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
            this.newTodo.text = "";
            console.log("ciao");
            
            } else {
                alert("inserisci un task")
            }
        }, delFunc: function (index) {
            this.toDo.splice(index,1)
        }
    }
}).mount('#app')
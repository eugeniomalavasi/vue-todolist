const { createApp } = Vue

createApp({
    data() {
        return {
            deleteFlag: true,
            icon: "fa-solid fa-square-check",
            redIcon: "fa-solid fa-square-minus",
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
            if (this.newTodo.text !== "") {
                const newTodoCopy = { ...this.newTodo }
                this.toDo.push(newTodoCopy);
                this.newTodo.text = "";
            } else {
                alert("inserisci un task");
            }
        }, delFunc: function (index) {
            this.toDo.splice(index,1)
        }, iconChange: function (index) {
            if(this.toDo[index].done) {
                this.icon = this.redIcon;
            }
        }
    }
}).mount('#app')
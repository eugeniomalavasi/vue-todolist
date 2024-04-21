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
            this.toDo.splice(index, 1)
        }, iconChange: function (curObj) {
            if (curObj.done) {
                this.icon = this.redIcon;
            } else {
                this.icon = "fa-solid fa-square-check";
            }
        }
    }, created() {
        let arrayStringed = JSON.stringify(this.toDo)
        localStorage.setItem("toDoArray", arrayStringed)
        console.log(arrayStringed); 
        let retrievedString = localStorage.getItem("toDoArray")
        let localStoredArray = JSON.parse(retrievedString)  
        console.log(localStoredArray);
    }
}).mount('#app')
const getElement = (id) => {

    const element = document.getElementById(id);
    return element;
    // const element = document.getElementById(id);
    //  return element;
};

const handleSubmit = () => {
    const todos = JSON.parse(localStorage.getItem("TODOS"));
    const inputText = getElement("todo-text").value;

    console.log(inputText);
    if (!todos) {

        const todoList = [
            {
                tittle: inputText,
                completed: false,
            },
        ];
        localStorage.setItem("TODOS", JSON.stringify(todoList));

    }
    else {
        const todoList = [
            ...todos,
            {
                tittle: inputText,
                completed: false,
            },
        ];
        localStorage.setItem("TODOS", JSON.stringify(todoList));
    }
    render();


    // const ul = getElement("todo-list");
    // const li = document.createElement("li");

    // li.classList.add("py-2");
    // li.innerText = inputText;
    // ul.appendChild(li);

    //console show text
    //console.log(input.value);
    //click console show
    //console.log("click");
}

const render = () => {
    const todos = JSON.parse(localStorage.getItem("TODOS"));
    console.log(todos);

    const ul = getElement("todo-list");
    ul.innerHTML = "";

    todos.forEach((item) => {
        const li = document.createElement("li");

        li.classList.add("py-2");
        li.innerText = item.tittle;
        ul.appendChild(li);
    });
}
render();

const handleClearAll = () => {
    localStorage.removeItem("TODOS");
    render();
}
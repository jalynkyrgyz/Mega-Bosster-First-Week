let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
    
tasks.forEach(function(elem) {
    const list = document.getElementById("todo-list");
    const lists = list.appendChild(document.createElement("li"));
    lists.classList.add("list");
    lists.textContent = elem;
    
}) 
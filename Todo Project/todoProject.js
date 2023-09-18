// event deligation
const todoForm = document.querySelector(".form-todo")
const formTodoText = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list")

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const newLi = document.createElement("li")
const todoInput = formTodoText.value;
const newLiInnerHTML = `<span class="text">${todoInput}</span>
<div class="todo-buttons ">
    <button class="todo-btn btn done">Done</button>
    <button class="todo-btn btn remove">Remove</button>
</div>`
newLi.innerHTML = newLiInnerHTML
todoList.append(newLi)  
formTodoText.value = ""

})

todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
     const liSpan = e.target.parentNode.previousElementSibling;
   liSpan.style.textDecoration = "line-through"
    }
    if(e.target.classList.contains("remove")){
    const ull = e.target.parentNode.parentNode
    ull.remove()
    }
})

todoList.addEventListener("dblclick",(e)=>{
if(e.target.classList.contains("done")){
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "none"
}
})



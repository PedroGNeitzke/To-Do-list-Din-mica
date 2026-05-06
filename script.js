const input = document.getElementById('input')
const botao = document.getElementById('btn')
const nav   = document.getElementById('output')
const list  = document.getElementById('list')

input.value = ""

botao.addEventListener("click", () => {

    if (input.value === "") {
        alert("Digite algo")
        input.style.border = "1px solid red"
    } else {
        const li = document.createElement('li')
        li.classList.add('task-item')
        
        li.innerHTML  = `
        ${input.value}
        <button class="botao" id="remove-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
            </svg>
        </button>
        `
        const button = li.querySelector('#remove-btn')

        button.addEventListener('click', () => {
            li.remove()
        })

        list.appendChild(li)
        li.appendChild(button)

        input.value = ""
        input.style.border = ""
    }
})
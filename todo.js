let inputs = document.querySelector('#inp')
let button = document.querySelector('button')
let text = document.querySelector(".text")

button.addEventListener('click', function (e) {
    if (inputs.value == "") {
        alert("Enter your task")
    }
    else {
        let newEle = document.createElement('ul');
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector('i').addEventListener('click', function () {
            newEle.remove()
        })

    }
})
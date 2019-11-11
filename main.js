// constantes
const URL = "https://rickandmortyapi.com/api/character/"
let height = 0
// selectores
let ignition = document.querySelector('#ignition')
let container = document.querySelector('.container')

// function
function getData() {
    fetch(URL)
        .then(result => {
            return result.json()
        })
        .then(data => {
            // ciclo
            for (let per of data.results) {
                displayData(per.name, per.image)
            }
        })
}
function displayData(name, image) {
    let div = document.createElement('div')
    div.className = "character"
    div.innerHTML = `<img src="${image}" /> <p>${name}</p>`
    container.appendChild(div)
    div.addEventListener('click', e=>{
        height += 460
        if(height>9000) height = 0
        container.style.transform = `translateY(-${height}px)`
    })

}

// listeners
ignition.addEventListener('click', getData)
getData()
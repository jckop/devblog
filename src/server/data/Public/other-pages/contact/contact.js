let sender = document.querySelector('form')
let fielda = document.getElementById('fielda');
let fieldb = document.getElementById('fieldb');
let fieldc = document.getElementById('fieldc');

sender.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.setItem("msg", [fieldb.value + "\n" +  fielda.value + "\n\n" + fieldc.value + "\n"])
    let values = localStorage.getItem("msg")
})
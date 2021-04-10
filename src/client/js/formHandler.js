export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    //fetch('http://localhost:8081/test')
    fetch('api.openweathermap.org/data/2.5/weather?q=London&appid=e52537ee7c988a3d6e76f5cf45bd0583')
    
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

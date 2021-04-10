export function fetchAPI(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('memo').value
    console.log("::: Fetch API :::")
    //fetch('http://localhost:8081/test')
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=e52537ee7c988a3d6e76f5cf45bd0583')
    
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('resultsAPI').innerHTML = res.message
    })
}

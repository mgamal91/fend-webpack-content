export function fetchAPI(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('memo').value;
    let test2=document.getElementById('resultsAPI');
    let p=document.createElement('p');
    let url='http://api.openweathermap.org/data/2.5/weather?q=London&appid=e52537ee7c988a3d6e76f5cf45bd0583';
    console.log("::: Fetch API :::");
    console.log(url);
    //fetch('http://localhost:8081/test')
    fetch(url)
    
    .then(res => res.json())
    .then(function(res) {
        console.log(res.base);
        test2.innerHTML = res.main.temp;
    })
}
export function fetchAPI(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('memo').value;
    //the result will be put here
    let test2=document.getElementById('resultsAPI');
    //url of the api we are going to fetch
    let url='http://api.openweathermap.org/data/2.5/weather?q=London&appid=e52537ee7c988a3d6e76f5cf45bd0583';
    console.log("::: Fetch API :::");
    console.log(url);
    //fetch('http://localhost:8081/test')
    fetch(url)
    
    .then(res => res.json())
    .then(function(res) {
        //i am testing with 2 outputs from my APi, one is base and the other is the temp which is inside main(main.temp)
        console.log(res.base);
        test2.innerHTML = res.main.temp;
    })
}
const submit = document.querySelector("button")
const input= document.querySelector("input")

const place = document.getElementById("location")
const temp =  document.getElementById("temp")
const feels =  document.getElementById("feel")
const weather = document.getElementById("weather")

// const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=10bc005288af55f2fd221829f429233e`)"
// fetch(url)
//   .then(res => {
//     console.log("success!", res);
//   })
//   .catch(err => {
//     console.log("something went wrong...", err);
//   });


submit.addEventListener('click', (evt) => {
    evt.preventDefault()
    console.log(input.value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=10bc005288af55f2fd221829f429233e`)
    .then((res) => res.json())
    .then((data )=> {
        console.log(data)
        place.innerText = data.name
        temp.innerText = kelvintoF(data.main.temp)
        feels.innerText = kelvintoF(data.main.feels_like)
        weather.innerText = data.weather[0].main
        console.log(place)
        console.log(temp)
        console.log(feels)
        console.log(weather)

        function kelvintoF(k){
            let f = ((k-273)*1.8 + 32).toFixed(0)
            return f
        }
    })
})


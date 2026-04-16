let button = document.querySelector("#btn")
let input = document.querySelector("#input")
let city = document.querySelector("#city")
let temp = document.querySelector("#temp")



  let getData  = async (cityName) => {
    let promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d5009a0fbee04efdb5c61650261604 &q=${cityName}&aqi=no`);
   let response = await promise.json();
   return response;

}


button.addEventListener("click", async ()=> {
    console.log(input.value);
    let value = input.value
    let result = await getData(value)
    console.log(result);
    city.innerHTML = `City :- ${result.location.name}, ${result.location.region} - ${result.location.country}`

    temp.innerHTML = `Temp :- ${result.current.temp_c}`
})
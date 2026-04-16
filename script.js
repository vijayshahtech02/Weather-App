let button = document.querySelector("#btn")
let input = document.querySelector("#input")
let city = document.querySelector("#city")
let temp = document.querySelector("#temp")



  let getData  = async (cityName) => {
    let promise = await fetch(`your_api_key_here`);
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
const apikey='050d9a8eea0aa6322d283e0ad9f507c2'
const getweather=async(city)=>{
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
    .then((res)=>res.json())
    .then((json)=>{
        return json;
    })
}
export default getweather;
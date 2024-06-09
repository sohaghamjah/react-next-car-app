export async function fetchCars() {
    const headers =  {
        'x-rapidapi-key': 'a4fabe6f2dmshf3c743bed7b6042p197e56jsn8227534a9490',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    })

    const result = await response.json();

    return result;
}
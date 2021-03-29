export default (param) => {
    const url = `http://universities.hipolabs.com/search?country=${param}`;

    return fetch(url).then(response => { return response.json() }) 
}


//fetch(url).then().then().catch()
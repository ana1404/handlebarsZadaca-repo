export default (vrijednost) => {
    for (let key in vrijednost) {
        if (key == "name") {
            return `<li>${vrijednost[key]}</li>`;
        }
            
    }
}
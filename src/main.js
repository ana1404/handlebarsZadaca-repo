import dohvati from "./data.js";
import { render } from "./render.js";
import layout from "./view/layout.js";
import results from "./view/results.js";

export default () => {
    document.getElementById("div").innerHTML = layout;
    const input = document.getElementById("input");
    const divRez = document.getElementById("rez");
    const spinner = document.getElementById("spinner");

    input.addEventListener("change", (e) => {

        while (divRez.hasChildNodes()) {
            divRez.removeChild(divRez.lastChild);
        }

        //fetch(url).then(promise => promise.json()).then(vrijedonst=>{console.log(vrijednost)})
        dohvati(e.target.value).then(vrijednost => {
            vrijednost.forEach(g => {
                render(divRez, results(g))
            });
        })     
    });
}
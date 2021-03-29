import dohvati from "./data.js";
import { render } from "./render.js";

export default () => {

    //kreiranje glavnog prozora
    let glavniHandleBar = Handlebars.templates.layout();
    document.getElementById("div").innerHTML = glavniHandleBar;


    const input = document.getElementById("input");
    const divRez = document.getElementById("rez");
    const spinner = document.getElementById("spinner");



    input.addEventListener("change", (e) => {

        while (divRez.hasChildNodes()) {
            divRez.removeChild(divRez.lastChild);
        }

        dohvati(e.target.value).then(vrijednost => {
            vrijednost.forEach(g => {
                //kreirnje <li></li>
                var mojHandleBar = Handlebars.templates.result(g);
                render(divRez, mojHandleBar);
            });
        })     
    });
}
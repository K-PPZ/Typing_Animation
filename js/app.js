let text_base = document.getElementById("text_base");
let text_generator = document.getElementById("text_generator");
let generator = ["design", "frontend", "backend", "testing"];

text_base.innerText = "We can help you with ";


let i = 0;
let y = 0;

setInterval(() => {
    let generator_eclate = generator[i].split("");
    
    if (y < generator_eclate.length) {
        text_generator.innerText += generator_eclate[y];
        y ++;
    } else {
        text_generator.innerText = "";
        i ++;
        y = 0;
    }

    if (i == generator.length) {
        i = 0;
    }
}, 1000);
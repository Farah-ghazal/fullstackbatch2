const text = "we are learning css, javascript, and html";

let pattern = "html";
let replacement = "HTML5";

let result = text.replaceAll(pattern,replacement);

function replaceAll(search, replacement) {
    //i didnt know how to make a for loop 
    var target = this;
    return target.split(search).join(replacement);
};
function concat(text1,text2){
    if(!text2) text2 = " ";
    else text2+=text1;
}


let firstname="Farah"
let lastname= "Ghazal"
let fullname = firstname.concat(" ", lastname);
console.log(fullname);
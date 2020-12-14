let pomme = "Elle est belle ma pomme !";

document.getElementById("index-pomme").innerHTML = pomme.lastIndexOf('pomme');

document.getElementById("last-index-m").innerHTML = pomme.lastIndexOf("m");

if(pomme.startsWith("Elle")) {
    console.log(pomme + " Commence par elle");
}

if(pomme.endsWith("!")) {
    console.log(pomme + " Se termine par un point d'exclamation");
}

document.getElementById("pomme").innerHTML = pomme.substring(18, 22);

let array = [pomme.length];
console.log(array);

for (let x = 0; x < pomme.length; x++) {
    document.getElementById("one-line").innerHTML += "</br>" + pomme[x];
}
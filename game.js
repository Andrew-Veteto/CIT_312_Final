const script = document.createElement("script");
script.src = "./obj.js";
document.head.append(script);

function randomNum() {
    const a = Math.floor(Math.random() * 51);
    return a;
}

var img = document.querySelector('.stateImg');

function showState(state) {
    states.forEach(function a(i) {
        if (i.name.replace(/\s/g, '').toLowerCase() === state) {
            img.innerHTML = i.image;
        }
    });
}

function playGame(){
    let num = randomNum();
    console.log(num);
    showState(num);
}
//getStates((data) => { states = data; console.log(states) });
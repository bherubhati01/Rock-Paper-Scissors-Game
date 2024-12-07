let ro = document.querySelector('#btn-ro')
let pa = document.querySelector('#btn-pa')
let sc = document.querySelector('#btn-sc')

let btn = document.querySelector('.reset')

let userNU = document.querySelector('.you-nu')
let comNU = document.querySelector('.com-nu')
let tieNU = document.querySelector('.tie')


let user = 0;
let com = 0;
let userSC = 0;
let comSC = 0;
let tieSC = 0;

ro.addEventListener('click', () => {
    ro.classList.add('fl')
    setTimeout(() => {
        ro.classList.remove('fl')
    }, 100)
    user = 1;  //rock
    com = Math.floor(Math.random() * 3) + 1
    if (com == 1) {
        // console.log("tie") //rock
        btn.innerHTML = "Tie! Comp Pick Rock"
        btn.style.backgroundColor = "black"
        tieSC++;
        tieNU.innerHTML = tieSC
    } else if (com == 2) {
        // console.log("lose") //paper
        btn.innerHTML = "Lose! Comp Pick Paper"
        comSC++;
        comNU.innerHTML = comSC
        btn.style.backgroundColor = "red"

    } else {
        // console.log("win") //scr
        btn.innerHTML = "Win! Comp Pick Scissors"
        userSC++;
        userNU.innerHTML = userSC;
        btn.style.backgroundColor = "green"
    }
})
pa.addEventListener('click', () => {
    pa.classList.add('fl')
    setTimeout(() => {
        pa.classList.remove('fl')
    }, 100)
    user = 2; //paper
    com = Math.floor(Math.random() * 3) + 1
    if (com == 1) {
        // console.log("win") //rock
        btn.innerHTML = "Win! Comp Pick Rock"
        userSC++;
        userNU.innerHTML = userSC;
        btn.style.backgroundColor = "green"
    } else if (com == 2) {
        // console.log("tie") //paper
        btn.innerHTML = "Tie! Comp Pick Paper "
        btn.style.backgroundColor = "black"
        tieSC++;
        tieNU.innerHTML = tieSC
    } else {
        // console.log("lose") //scr
        btn.innerHTML = "Lose! Comp Pick Scissors"
        comSC++;
        comNU.innerHTML = comSC
        btn.style.backgroundColor = "red"
    }
})
sc.addEventListener('click', () => {
    sc.classList.add('fl')
    setTimeout(() => {
        sc.classList.remove('fl')
    }, 100)
    user = 3; //scr
    com = Math.floor(Math.random() * 3) + 1
    if (com == 1) {
        // console.log("lose") //rock
        btn.innerHTML = "Lose! Comp Pick Rock"
        comSC++;
        comNU.innerHTML = comSC
        btn.style.backgroundColor = "red"
    } else if (com == 2) {
        // console.log("win") //paper
        btn.innerHTML = "Win! Comp Pick Paper"
        userSC++;
        userNU.innerHTML = userSC;
        btn.style.backgroundColor = "green"
    } else {
        // console.log("tie") //scr
        btn.innerHTML = "Tie! Comp Pick Scissors"
        btn.style.backgroundColor = "black"
        tieSC++;
        tieNU.innerHTML = tieSC
    }
})


btn.addEventListener('click', reset)


function reset() {
    user = 0;
    com = 0;
    userSC = 0;
    comSC = 0;
    tieSC = 0;
    btn.innerHTML = "Pick your move"
    btn.style.backgroundColor = "black"
    tieNU.innerHTML = "00"
    comNU.innerHTML = "00"
    userNU.innerHTML = "00"

}




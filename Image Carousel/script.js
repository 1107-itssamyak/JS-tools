const leftbutton = document.querySelector("#left");
const rightbutton = document.querySelector("#right");
const centerbutton = document.querySelector("#center");
const icontain = document.querySelector('#imgs');
const message = document.querySelector("#message");

// setting intervals for moving the images here using setInterval
let interval = setInterval(run, 4000);

function run() {
    cnt++;
    changeImage();
}

function remover(cnt) {
    icontain.classList.remove("carousel1");
    icontain.classList.remove("carousel2");
    icontain.classList.remove("carousel3");
    icontain.classList.remove("carousel4");

    icontain.classList.add(`carousel${cnt}`);
}

function intervalCheckerPrimary() {
    if (interval === null) {
        interval = window.setInterval(run, 4000);
        centerbutton.innerHTML = `<i class="fas fa-pause"></i>`;
        message.innerText = "The Carousel Slider is on auto play";
    } else {
        window.clearInterval(interval);
        centerbutton.innerHTML = `<i class="fas fa-play"></i>`;
        message.innerText = "The Carousel Slider is currently paused";
        interval = null;
    }
}

function intervalCheckerSecondary() {
    window.clearInterval(interval);
    centerbutton.innerHTML = `<i class="fas fa-play"></i>`;
    message.innerText = "The Carousel Slider is currently paused";
    interval = null;
}

function changeImage() {
    if (cnt < 1) cnt = 4;
    else if (cnt > 4) cnt = 1;

    remover(cnt);
}

let cnt = 1;

//TODO adding onclick eventlisteners
rightbutton.addEventListener('click', () => {
    cnt++;
    if (cnt > 4) cnt = 1;

    remover(cnt);
    intervalCheckerSecondary();
})

leftbutton.addEventListener('click', () => {
    cnt--;
    if (cnt < 1) cnt = 4;

    remover(cnt);
    intervalCheckerSecondary();
})

centerbutton.addEventListener('click', () => {
    intervalCheckerPrimary();
})